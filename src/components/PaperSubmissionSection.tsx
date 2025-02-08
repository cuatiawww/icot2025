export default function PaperSubmissionSection() {
    const templates = [
      {
        type: 'Microsoft Word',
        items: [
          { name: 'A4', format: 'DOC', size: '30 KB', link: '#' }
        ]
      },
      {
        type: 'LaTeX',
        items: [
          { name: 'Template Instructions', format: 'PDF', size: '63 KB', link: '#' },
          { name: 'Template', format: 'ZIP', size: '700 KB', link: '#' },
          { name: 'Bibliography Files', format: 'ZIP', size: '309 KB', link: '#' }
        ]
      }
    ];
  
    return (
      <section id="submission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Paper Submission and Publication</h2>
  
          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <p className="text-gray-600 mb-6">
              Prospective authors are invited to submit full-length, four-page papers, including figures and references. 
              All ICOT papers will be handled and reviewed electronically. Accepted papers will be submitted for inclusion 
              into IEEE Xplore subject to meeting IEEE Xplores scope and quality requirements.
            </p>
          </div>
  
          {/* Submission Portal */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Submission Portal</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="mr-2">🔗</span>
                <span>Submission portal: </span>
                <a href="https://wic.org.tw/login_ext.php" className="text-orange-600 hover:text-orange-700 ml-2">
                  https://wic.org.tw/login_ext.php
                </a>
                <span className="ml-2 text-red-500">(Close)</span>
              </p>
              <p className="flex items-start text-gray-600">
                <span className="mr-2">📁</span>
                <span>NOTE: When uploading files, please compress the files into *.zip or *.rar and the file size is limited to 200MB.</span>
              </p>
            </div>
          </div>
  
          {/* Templates */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Paper Templates</h3>
            <div className="space-y-8">
              {templates.map((template) => (
                <div key={template.type}>
                  <h4 className="text-xl font-medium mb-4">{template.type}</h4>
                  <ul className="space-y-3">
                    {template.items.map((item) => (
                      <li key={item.name} className="flex items-center">
                        <a 
                          href={item.link}
                          className="text-orange-600 hover:text-orange-700 flex items-center"
                        >
                          {item.name} ({item.format}, {item.size})
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          {/* Submission Guidelines */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Submission Guidelines</h3>
            <div className="space-y-4">
              <div className="prose max-w-none text-gray-600">
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Length:</strong> Papers must be no longer than 4 pages, including all text, figures, and references.</li>
                  <li><strong>Proofread:</strong> Your source document should be thoroughly proofread by a native speaker to confirm that it will require no revision.</li>
                  <li><strong>Abstract:</strong> The abstract should be about 100-150 words.</li>
                  <li><strong>Review Process:</strong> Papers are reviewed by experts selected by the conference committee for their demonstrated knowledge of conference topics.</li>
                  <li><strong>Dual submissions:</strong> Authors must guarantee that their submission has not been previously published and contains no significant overlap with other submissions.</li>
                  <li><strong>Presentation guarantee:</strong> Accepted papers must be presented at the conference by one of the authors.</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              For any queries regarding paper submission, please email:
              <a 
                href="mailto:2024icot@gmail.com"
                className="text-orange-600 hover:text-orange-700 ml-2"
              >
                2024icot@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }