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
      <section id="dates" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Important Dates</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                {dates.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="font-medium text-gray-900">
                      {item.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {item.isExtended && (
                        <>
                          <span className="text-gray-500 line-through">{item.originalDate}</span>
                          <span className="text-red-500 font-medium">{item.date}</span>
                        </>
                      )}
                      {item.isStrikethrough && (
                        <span className="text-gray-500 line-through">{item.date}</span>
                      )}
                      {item.isHighlighted && (
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600 font-medium">{item.date}</span>
                          <span className="text-orange-600">🚩</span>
                        </div>
                      )}
                      {!item.isExtended && !item.isStrikethrough && !item.isHighlighted && (
                        <span className="text-gray-600">{item.date}</span>
                      )}
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