'use client'

import {
    addEdge,
    ConnectionLineType,
    Edge,
    Connection,
    Node,
    Panel,
    ReactFlow,
    useEdgesState,
    useNodesState,
  } from '@xyflow/react';
  import dagre from 'dagre';
  import { useCallback } from 'react';
  import { v4 as uuidv4 } from 'uuid';
  
  import '@xyflow/react/dist/style.css';
import TextUpdaterNode from '../components/CustomNode';
import CustomEdge from '../components/CustomEdge';
  
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  
  const nodeWidth = 220;
  const nodeHeight = 100;
  
  export const getLayoutedElements = (nodes:Node[], edges:Edge[], direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });
  
    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
  
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
  
    dagre.layout(dagreGraph);
  
    const newNodes = nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      const newNode = {
        ...node,
        targetPosition: isHorizontal ? 'left' : 'top',
        sourcePosition: isHorizontal ? 'right' : 'bottom',
        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        position: {
          x: nodeWithPosition.x - nodeWidth / 2,
          y: nodeWithPosition.y - nodeHeight / 2,
        },
      };
  
      return newNode;
    });
  
    return { nodes: newNodes, edges };
  };
  
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    [],
    [],
  );
  
  const LayoutFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes as Node[]);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  
    const onConnect = useCallback(
        (params: Connection) =>
          setEdges((eds) =>
            addEdge(
              { ...params, type: ConnectionLineType.SmoothStep, animated: true },
              eds,
            ),
          ),
        [],
      );
  
    const onLayout = useCallback(
      (direction:string) => {
        const { nodes: layoutedNodes, edges: layoutedEdges } =
          getLayoutedElements(nodes, edges, direction);
  
        setNodes([...layoutedNodes as Node[]]);
        setEdges([...layoutedEdges]);
      },
      [nodes, edges],
    );
  
    const edgeTypes = {
      'custom-edge': CustomEdge,
    };
  
    const nodeTypes = { textUpdater: TextUpdaterNode };
  
  
    const addNode = useCallback(() => {
      const newnode_id = uuidv4();
      const newNode = {
        id: newnode_id,
        data: { label: `Node ${nodes.length + 1}` },
        position: { x: 0, y: 0 },
        type:'textUpdater'
      };
      const newNodes = [...nodes, newNode];
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(newNodes, edges);
      setNodes([...layoutedNodes as Node[]]);
      setEdges([...layoutedEdges]);
    }, [nodes, edges]);
  
    return (
      <div className='' style={{width:'100vw', height:'100vh'}}>
  
  <svg style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <marker
              id="logo"
              viewBox="0 0 40 40"
              markerHeight={20}
              markerWidth={20}
              refX={20}
              refY={40}
            >
              <path
                d="M35 23H25C23.8954 23 23 23.8954 23 25V35C23 36.1046 23.8954 37 25 37H35C36.1046 37 37 36.1046 37 35V25C37 23.8954 36.1046 23 35 23Z"
                stroke="#1A192B"
                strokeWidth="2"
                fill="white"
              />
              <path
                d="M35 3H25C23.8954 3 23 3.89543 23 5V15C23 16.1046 23.8954 17 25 17H35C36.1046 17 37 16.1046 37 15V5C37 3.89543 36.1046 3 35 3Z"
                stroke="#FF0072"
                strokeWidth="2"
                fill="white"
              />
              <path
                d="M15 23H5C3.89543 23 3 23.8954 3 25V35C3 36.1046 3.89543 37 5 37H15C16.1046 37 17 36.1046 17 35V25C17 23.8954 16.1046 23 15 23Z"
                stroke="#1A192B"
                strokeWidth="2"
                fill="white"
              />
              <path
                d="M15 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3Z"
                stroke="#1A192B"
                strokeWidth="2"
                fill="white"
              />
              <path
                d="M17 13C18.6569 13 20 11.6569 20 10C20 8.34315 18.6569 7 17 7C15.3431 7 14 8.34315 14 10C14 11.6569 15.3431 13 17 13Z"
                fill="white"
              />
              <path
                d="M23 13C24.6569 13 26 11.6569 26 10C26 8.34315 24.6569 7 23 7C21.3431 7 20 8.34315 20 10C20 11.6569 21.3431 13 23 13Z"
                fill="white"
              />
              <path
                d="M30 20C31.6569 20 33 18.6569 33 17C33 15.3431 31.6569 14 30 14C28.3431 14 27 15.3431 27 17C27 18.6569 28.3431 20 30 20Z"
                fill="white"
              />
              <path
                d="M30 26C31.6569 26 33 24.6569 33 23C33 21.3431 31.6569 20 30 20C28.3431 20 27 21.3431 27 23C27 24.6569 28.3431 26 30 26Z"
                fill="white"
              />
              <path
                d="M17 33C18.6569 33 20 31.6569 20 30C20 28.3431 18.6569 27 17 27C15.3431 27 14 28.3431 14 30C14 31.6569 15.3431 33 17 33Z"
                fill="white"
              />
              <path
                d="M23 33C24.6569 33 26 31.6569 26 30C26 28.3431 24.6569 27 23 27C21.3431 27 20 28.3431 20 30C20 31.6569 21.3431 33 23 33Z"
                fill="white"
              />
              <path
                d="M30 25C31.1046 25 32 24.1046 32 23C32 21.8954 31.1046 21 30 21C28.8954 21 28 21.8954 28 23C28 24.1046 28.8954 25 30 25Z"
                fill="#1A192B"
              />
              <path
                d="M17 32C18.1046 32 19 31.1046 19 30C19 28.8954 18.1046 28 17 28C15.8954 28 15 28.8954 15 30C15 31.1046 15.8954 32 17 32Z"
                fill="#1A192B"
              />
              <path
                d="M23 32C24.1046 32 25 31.1046 25 30C25 28.8954 24.1046 28 23 28C21.8954 28 21 28.8954 21 30C21 31.1046 21.8954 32 23 32Z"
                fill="#1A192B"
              />
              <path opacity="0.35" d="M22 9.5H18V10.5H22V9.5Z" fill="#1A192B" />
              <path
                opacity="0.35"
                d="M29.5 17.5V21.5H30.5V17.5H29.5Z"
                fill="#1A192B"
              />
              <path opacity="0.35" d="M22 29.5H18V30.5H22V29.5Z" fill="#1A192B" />
              <path
                d="M17 12C18.1046 12 19 11.1046 19 10C19 8.89543 18.1046 8 17 8C15.8954 8 15 8.89543 15 10C15 11.1046 15.8954 12 17 12Z"
                fill="#1A192B"
              />
              <path
                d="M23 12C24.1046 12 25 11.1046 25 10C25 8.89543 24.1046 8 23 8C21.8954 8 21 8.89543 21 10C21 11.1046 21.8954 12 23 12Z"
                fill="#FF0072"
              />
              <path
                d="M30 19C31.1046 19 32 18.1046 32 17C32 15.8954 31.1046 15 30 15C28.8954 15 28 15.8954 28 17C28 18.1046 28.8954 19 30 19Z"
                fill="#FF0072"
              />
            </marker>
          </defs>
        </svg>
        
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodeClick={()=>{
  
          }}
        >
          <Panel position="top-right">
            <button onClick={() => onLayout('TB')}>vertical layout</button>
            <button onClick={() => onLayout('LR')}>horizontal layout</button>
            <button onClick={addNode}>Add Node</button>
          </Panel>
        </ReactFlow>
      </div>
    );
  };
  
  export default LayoutFlow;
  