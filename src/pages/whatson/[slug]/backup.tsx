import { Event } from '../../../components/types/types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import slugify from 'slugify'; // You'll need to install this package
import { allEvents } from '../../../data/event';
import NavbarOvolo from '../../../components/navbar/navbar-ovolo/NavbarOvolo';

const EventSlugPage = ({ eventData }: { eventData: Event }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!eventData) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Your existing component JSX */}
      <Head>
        <title>{eventData.title} | Event Details</title>
        <meta name="description" content={eventData.description} />
      </Head>
      <NavbarOvolo />

      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Back button */}
        {/* <button 
          onClick={() => router.back()} 
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Events
        </button> */}

        {/* Event header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <img 
              src={eventData.image} 
              alt={eventData.title} 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-3">
              {eventData.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{eventData.title}</h1>
            
            <div className="flex items-center mb-4">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700">{eventData.country}</span>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Event Details</h2>
              
              <div className="space-y-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Date</p>
                    <p className="font-medium">{eventData.date}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Time</p>
                    <p className="font-medium">{eventData.time}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Price</p>
                    <p className="font-medium">${eventData.cost.toFixed(3)}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Venue</p>
                    <p className="font-medium">{eventData.address}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Closest Hotel</p>
                    <p className="font-medium">{eventData.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href={eventData.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Event description */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">About the Event</h2>
          <p className="text-gray-700 whitespace-pre-line">{eventData.description}</p>
        </div>

        {/* How to get there section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Get There</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">By Public Transport</h3>
              <p className="text-gray-600">Take the MTR to Kai Tak Station and follow signs to the Sports Park.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">By Car</h3>
              <p className="text-gray-600">Parking is available at the venue for a fee of $20 per hour.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  // In a real app, fetch events from your API/database
  const paths = allEvents.map(event => ({
    params: { slug: event.slug }
  }));

  return {
    paths,
    fallback: 'blocking' // Better for SEO than true/false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // In a real app, fetch the specific event from your API/database
  const eventData = allEvents.find(event => event.slug === params.slug);

  if (!eventData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      eventData,
    },
    revalidate: 60 // ISR: regenerate page every 60 seconds if needed
  };
}

export default EventSlugPage;