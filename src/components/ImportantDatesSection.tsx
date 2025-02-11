export default function ImportantDatesSection() {
  const dates = [
    {
      label: "Paper Submission",
      date: "25 October 2024",
      isExtended: true,
      originalDate: "15 October 2024"
    },
    {
      label: "Notification of Acceptance",
      date: "15 November 2024",
      isStrikethrough: true
    },
    {
      label: "Camera Ready Paper Submission",
      date: "20 November 2024",
      isStrikethrough: true
    },
    {
      label: "Early Bird Registration",
      date: "30 November 2024",
      isStrikethrough: true
    },
    {
      label: "Registration Deadline",
      date: "07 December 2024",
      isStrikethrough: true
    },
    {
      label: "Conference",
      date: "15-18 December 2024",
      isHighlighted: true
    }
  ];

  return (
    <section id="dates" className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Important Dates
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-16 w-px bg-gray-200 hidden md:block"></div>

            <div className="space-y-8">
              {dates.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row md:items-start gap-6 md:pl-12 
                    ${item.isHighlighted ? 'animate-pulse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-4 h-4 rounded-full hidden md:block mt-1.5
                    ${item.isHighlighted ? 'bg-orange-500' : 
                      item.isStrikethrough ? 'bg-gray-300' : 
                      item.isExtended ? 'bg-red-500' : 'bg-blue-500'}">
                  </div>

                  <div className="flex-1">
                    <div className={`text-lg font-semibold mb-1
                      ${item.isHighlighted ? 'text-orange-600' : 
                        item.isStrikethrough ? 'text-gray-400 line-through' : 
                        'text-gray-900'}`}>
                      {item.label}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      {item.isExtended && (
                        <>
                          <span className="text-gray-400 line-through text-sm">
                            {item.originalDate}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                              Extended to {item.date}
                            </span>
                          </span>
                        </>
                      )}
                      {item.isStrikethrough && (
                        <span className="text-gray-400 line-through">
                          {item.date}
                        </span>
                      )}
                      {item.isHighlighted && (
                        <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                          <span className="text-orange-600 font-medium">
                            {item.date}
                          </span>
                          <span className="text-orange-600 animate-bounce">🎯</span>
                        </div>
                      )}
                      {!item.isExtended && !item.isStrikethrough && !item.isHighlighted && (
                        <span className="text-gray-600">{item.date}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}