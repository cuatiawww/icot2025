export default function ImportantDatesSection() {
  const dates = [
    {
      label: "Paper Submission",
      date: "15 October 2025",
      type: "deadline"
    },
    {
      label: "Notification of Acceptance",
      date: "15 November 2025",
      type: "normal" 
    },
    {
      label: "Camera Ready Paper Submission",
      date: "20 November 2025",
      type: "normal"
    },
    {
      label: "Early Bird Registration",
      date: "30 November 2025",
      type: "normal"
    },
    {
      label: "Registration Deadline",
      date: "07 December 2025",
      type: "normal"
    },
    {
      label: "Conference",
      date: "27-30 October 2025",
      type: "highlight"
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
            <div className="absolute left-14 top-16 bottom-16 w-px bg-gray-200 hidden md:block"></div>

            <div className="space-y-8">
              {dates.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col md:flex-row md:items-center gap-6 md:pl-12"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 w-4 h-4 rounded-full hidden md:block 
                    ${item.type === 'deadline' ? 'bg-red-500' : 
                      item.type === 'highlight' ? 'bg-orange-500' : 
                      'bg-blue-500'}`}
                  />

                  <div className="flex-1">
                    <div className={`text-lg font-semibold 
                      ${item.type === 'highlight' ? 'text-orange-600' : 'text-gray-900'}`}
                    >
                      {item.label}
                    </div>
                    {item.type === 'highlight' ? (
                      <div className="inline-flex items-center gap-2 mt-2 bg-orange-100 px-4 py-2 rounded-full">
                        <span className="text-orange-600 font-medium">{item.date}</span>
                        <span className="text-orange-600">🎯</span>
                      </div>
                    ) : (
                      <div className={`mt-1 text-base ${item.type === 'deadline' ? 'text-red-600' : 'text-gray-600'}`}>
                        {item.date}
                      </div>
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