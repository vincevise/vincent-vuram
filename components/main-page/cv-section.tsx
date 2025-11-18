import React from 'react'
import ItemContainer from '../ui-components/item-container'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { IoSchoolOutline } from 'react-icons/io5'

type Props = {}

const CvSection = (props: Props) => {
  return (
    <ItemContainer col={6}>
              <div className="w-full h-full overflow-y-auto">
                <div className="w-full   flex flex-col text-left ">
                  <div className="p-4 border-b flex items-center gap-3">
                    <PiSuitcaseSimple className="w-6 h-6" />
                    <h3 className="text-lg font-medium">Experience</h3>
                  </div>
                  <div className="p-4 space-y-2 text-sm text-gray-800 divide-y divide-gray-200">
                    <div className='pb-2'>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Junior Software Developer
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2023 - present
                        </span>
                      </div>
                      <div>
                        <h2 className="italic text-gray-600 mb-4">Zigment AI — Founding Frontend Developer</h2>
      <p className=" text-gray-600 mb-4">
        At Zigment AI, I led the entire frontend development of a complex AI automation and 
        multi-channel communication platform. From architecture to UX, I built the product 
        from the ground up and helped shape it into a production-ready SaaS used by real businesses.
      </p>

      {/* My Impact */}
      <div className="mb-4 bg-gray-100 rounded-lg p-4">
        <h3 className="text-md font-semibold mb-3">My Impact</h3>
        <ul className="space-y-1 text-gray-700 leading-relaxed">
          <li>• Built the complete frontend architecture using <strong>Next.js, React 18, and TypeScript</strong></li>
          <li>• Designed and implemented a full internal <strong>design system</strong> with shadcn/ui + Tailwind</li>
          <li>• Engineered the <strong>AI Workflow Builder</strong> using React Flow</li>
          <li>• Developed a <strong>multi-channel messaging suite</strong> (WhatsApp, LinkedIn, Email, Voice via LiveKit)</li>
          <li>• Created a high-performance <strong>embeddable chat widget</strong> installable with a single script</li>
          <li>• Shipped <strong>AI-powered analytics dashboards</strong> and custom SQL-style reporting tools</li>
          <li>• Built authentication, RBAC, and multi-workspace systems for enterprise-grade scaling</li>
          <li>• Optimized performance using SSR, SSG, lazy loading, and code splitting</li>
          <li>• Integrated CI/CD pipelines and product analytics using PostHog</li>
        </ul>
      </div>

      {/* Key Features */}
      <div className="mb-4 bg-gray-100 rounded-lg p-4">
        <h3 className="text-md font-semibold mb-3">Key Features I Built</h3>
        <ul className="space-y-1 text-gray-700 leading-relaxed">
          <li>• AI Workflow Editor (React Flow)</li>
          <li>• Embeddable Chat Widget (React + Vite)</li>
          <li>• Unified Inbox supporting 8+ channels</li>
          <li>• AI Testing & QA Automation Suite</li>
          <li>• Dashboard & Reporting Engine</li>
          <li>• Data Hub for document ingestion</li>
          <li>• Team Management & Role-Based Access Control</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className='mb-4 bg-gray-100 rounded-lg p-4'>
        <h3 className="text-md font-semibold mb-3">Tech Stack</h3>
        <p className="text-gray-700 leading-relaxed">
          Next.js, React 18, TypeScript, Tailwind CSS, shadcn/ui, React Flow, React Query, 
          Vite, Chart.js, Framer Motion, LiveKit, Axios, PostHog, Radix UI, D3.js
        </p>
      </div>
                      </div>
                
                      
                    </div>
                    <div className='pb-2'>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">React Js Intern</h3>
                        <span className="text-gray-500 text-sm">
                          2022 - 2023
                        </span>
                      </div>
                      <p className="italic text-gray-600">Par Infotech</p>
                      <p className="mt-2 leading-relaxed">
                        Enhanced the existing poster maker app’s mobile
                        experience by making it responsive, using jQuery.
                        Furthermore, implemented drag-and-drop functionality for
                        touch screens on mobile devices.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Full Stack Developer
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2023 - 2023
                        </span>
                      </div>
                      <p className="italic text-gray-600">Freelance</p>
                      <p className="mt-2 leading-relaxed">
                        Created a website using React for an architecture firm,
                        and also developed a CMS application to manage the
                        site’s content. This web app enabled the firm to add and
                        update projects as needed.
                      </p>
                    </div>
                    
                  </div>
                </div>
                <div className="w-full  flex flex-col text-left ">
                  <div className="p-4 border-y flex items-center gap-3">
                    <IoSchoolOutline className="w-6 h-6" />
                    <h3 className="text-lg font-medium">Education</h3>
                  </div>
                  <div className="p-4 space-y-4 text-sm text-gray-800">
                    {/* High School */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">High School</h3>
                        <span className="text-gray-500 text-sm">
                          2002 - 2014
                        </span>
                      </div>
                      <p className="italic text-gray-600">
                        J.H. Ambani Saraswati Vidya Mandir, Surat
                      </p>
                    </div>

                    {/* Higher Secondary School */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Higher Secondary School
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2014 - 2016
                        </span>
                      </div>
                      <p className="italic text-gray-600">
                        Shree Swaminarayan H.V. Vidyalaya, Surat
                      </p>
                    </div>

                    {/* Bachelor of Architecture */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Bachelor of Architecture
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2016 - 2021
                        </span>
                      </div>
                      <p className="italic text-gray-600">
                        Raman Bhakta School of Architecture, Surat
                      </p>
                    </div>

                    {/* Full-Stack Web Development Course */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Full-Stack Web Development Course
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2021 - 2022
                        </span>
                      </div>
                      <p className="italic text-gray-600">
                        Great Learning / IIT Roorkee, Online
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ItemContainer>
  )
}

export default CvSection