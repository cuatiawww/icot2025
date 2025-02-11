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
      <section id="submission" className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Paper Submission and Publication
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
  
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-600 text-lg leading-relaxed">
                Prospective authors are invited to submit full-length, four-page papers, including figures and references. 
                All ICOT papers will be handled and reviewed electronically. Accepted papers will be submitted for inclusion 
                into IEEE Xplore subject to meeting IEEE Xplores scope and quality requirements.
              </p>
            </div>
          </div>
  
          {/* Submission Portal */}
          <div className="grid gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 px-8 py-4">
                <h3 className="text-2xl font-bold text-white">Submission Portal</h3>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      🔗
                    </span>
                    <span>Submission portal: </span>
                    <a href="https://wic.org.tw/login_ext.php" className="text-orange-600 hover:text-orange-700 font-medium">
                      https://wic.org.tw/login_ext.php
                    </a>
                    <span className="text-red-500 font-medium">(Close)</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      📁
                    </span>
                    <span>NOTE: When uploading files, please compress the files into *.zip or *.rar and the file size is limited to 200MB.</span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Templates */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 px-8 py-4">
                <h3 className="text-2xl font-bold text-white">Paper Templates</h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {templates.map((template) => (
                    <div key={template.type} className="bg-orange-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-4 text-gray-900">{template.type}</h4>
                      <ul className="space-y-3">
                        {template.items.map((item) => (
                          <li key={item.name} className="flex items-center">
                            <a 
                              href={item.link}
                              className="text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-2 group"
                            >
                              <span className="text-sm bg-orange-100 px-2 py-1 rounded">
                                {item.format}
                              </span>
                              <span className="font-medium group-hover:underline">
                                {item.name}
                              </span>
                              <span className="text-sm text-gray-500">
                                ({item.size})
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 px-8 py-4">
                <h3 className="text-2xl font-bold text-white">Submission Guidelines</h3>
              </div>
              <div className="p-8">
                <ul className="grid gap-4 md:grid-cols-2">
                  <li className="flex gap-4 bg-orange-50 rounded-xl p-6">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      📄
                    </div>
                    <div>
                      <strong className="text-gray-900">Length:</strong>
                      <p className="text-gray-600 mt-1">Papers must be no longer than 4 pages, including all text, figures, and references.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 bg-orange-50 rounded-xl p-6">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      📝
                    </div>
                    <div>
                      <strong className="text-gray-900">Proofread:</strong>
                      <p className="text-gray-600 mt-1">Your source document should be thoroughly proofread by a native speaker.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 bg-orange-50 rounded-xl p-6">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      📋
                    </div>
                    <div>
                      <strong className="text-gray-900">Abstract:</strong>
                      <p className="text-gray-600 mt-1">The abstract should be about 100-150 words.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 bg-orange-50 rounded-xl p-6">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      👥
                    </div>
                    <div>
                      <strong className="text-gray-900">Review Process:</strong>
                      <p className="text-gray-600 mt-1">Papers are reviewed by experts selected by the conference committee.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 bg-orange-50 rounded-xl p-6">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      ⚠️
                    </div>
                    <div>
                      <strong className="text-gray-900">Dual submissions:</strong>
                      <p className="text-gray-600 mt-1">Submissions must not have been previously published or contain significant overlap.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 bg-orange-50 rounded-xl p-6">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      🎯
                    </div>
                    <div>
                      <strong className="text-gray-900">Presentation:</strong>
                      <p className="text-gray-600 mt-1">Accepted papers must be presented at the conference by one of the authors.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Contact */}
          <div className="max-w-2xl mx-auto text-center bg-orange-50 rounded-2xl p-8">
            <p className="text-gray-600 text-lg mb-4">
              For any queries regarding paper submission, please email:
            </p>
            <a 
              href="mailto:2024icot@gmail.com"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              2024icot@gmail.com
            </a>
          </div>
        </div>
      </section>
    );
  }