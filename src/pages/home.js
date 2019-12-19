import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../queries/index';
import HashLoader from 'react-spinners/HashLoader';
import { Link } from '@reach/router';

const Home = () => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  if (loading || !data)
    return (
      <div className="flex justify-center h-screen items-center">
        <HashLoader size={150} loading={!loading} color="#136FE7" />
      </div>
    );

  if (error) return <p>There was an error: {error}</p>;

  console.log(data.user);

  return (
    <div className="pt-24 pb-6 bg-gray-100">
      <div className="main-container flex flex-col items-center py-4 bg-white mx-6 shadow-xl overflow-hidden">
        <img
          className="rounded-full shadow-md w-96 h-96 object-cover"
          src={data.user.picture}
          alt={`profile picuture of ${data.user.name}`}
        />
        <h1 className="text-3xl mt-6">{data.user.name}</h1>
      </div>
      <div className="flex justify-around mt-24 m-8">
        <Link to='readqr'>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 0H2C0.89375 0 0 0.89375 0 2V21.25C0 21.525 0.225 21.75 0.5 21.75H21.25C21.525 21.75 21.75 21.525 21.75 21.25V0.5C21.75 0.225 21.525 0 21.25 0ZM17.75 17.75H4V4H17.75V17.75ZM9.125 13.125H12.625C12.9 13.125 13.125 12.9 13.125 12.625V9.125C13.125 8.85 12.9 8.625 12.625 8.625H9.125C8.85 8.625 8.625 8.85 8.625 9.125V12.625C8.625 12.9 8.85 13.125 9.125 13.125ZM21.25 26.25H0.5C0.225 26.25 0 26.475 0 26.75V46C0 47.1062 0.89375 48 2 48H21.25C21.525 48 21.75 47.775 21.75 47.5V26.75C21.75 26.475 21.525 26.25 21.25 26.25ZM17.75 44H4V30.25H17.75V44ZM9.125 39.375H12.625C12.9 39.375 13.125 39.15 13.125 38.875V35.375C13.125 35.1 12.9 34.875 12.625 34.875H9.125C8.85 34.875 8.625 35.1 8.625 35.375V38.875C8.625 39.15 8.85 39.375 9.125 39.375ZM46 0H26.75C26.475 0 26.25 0.225 26.25 0.5V21.25C26.25 21.525 26.475 21.75 26.75 21.75H47.5C47.775 21.75 48 21.525 48 21.25V2C48 0.89375 47.1062 0 46 0ZM44 17.75H30.25V4H44V17.75ZM35.375 13.125H38.875C39.15 13.125 39.375 12.9 39.375 12.625V9.125C39.375 8.85 39.15 8.625 38.875 8.625H35.375C35.1 8.625 34.875 8.85 34.875 9.125V12.625C34.875 12.9 35.1 13.125 35.375 13.125ZM47.5 26.25H44.5C44.225 26.25 44 26.475 44 26.75V35.125H39.125V26.75C39.125 26.475 38.9 26.25 38.625 26.25H26.75C26.475 26.25 26.25 26.475 26.25 26.75V47.5C26.25 47.775 26.475 48 26.75 48H29.75C30.025 48 30.25 47.775 30.25 47.5V32.25H35.125V38.625C35.125 38.9 35.35 39.125 35.625 39.125H47.5C47.775 39.125 48 38.9 48 38.625V26.75C48 26.475 47.775 26.25 47.5 26.25ZM38.625 44H35.625C35.35 44 35.125 44.225 35.125 44.5V47.5C35.125 47.775 35.35 48 35.625 48H38.625C38.9 48 39.125 47.775 39.125 47.5V44.5C39.125 44.225 38.9 44 38.625 44ZM47.5 44H44.5C44.225 44 44 44.225 44 44.5V47.5C44 47.775 44.225 48 44.5 48H47.5C47.775 48 48 47.775 48 47.5V44.5C48 44.225 47.775 44 47.5 44Z" fill="black"/>
          </svg>
        </Link>
        <p className="text-2xl">or</p>
        <Link to='scanqr'>
          <svg width="54" height="46" viewBox="0 0 54 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49 7.5H40.5L38.475 1.825C38.3351 1.43668 38.0787 1.10101 37.7409 0.86386C37.4031 0.626709 37.0003 0.499636 36.5875 0.500001H17.4125C16.5687 0.500001 15.8125 1.03125 15.5312 1.825L13.5 7.5H5C2.2375 7.5 0 9.7375 0 12.5V41C0 43.7625 2.2375 46 5 46H49C51.7625 46 54 43.7625 54 41V12.5C54 9.7375 51.7625 7.5 49 7.5ZM49.5 41C49.5 41.275 49.275 41.5 49 41.5H5C4.725 41.5 4.5 41.275 4.5 41V12.5C4.5 12.225 4.725 12 5 12H16.6687L17.7375 9.0125L19.1687 5H34.825L36.2562 9.0125L37.325 12H49C49.275 12 49.5 12.225 49.5 12.5V41ZM27 16C21.475 16 17 20.475 17 26C17 31.525 21.475 36 27 36C32.525 36 37 31.525 37 26C37 20.475 32.525 16 27 16ZM27 32C23.6875 32 21 29.3125 21 26C21 22.6875 23.6875 20 27 20C30.3125 20 33 22.6875 33 26C33 29.3125 30.3125 32 27 32Z" fill="black"/>
          </svg>
        </Link>
      </div>
      <div className="box bg-gray-300 mx-6 mt-24 pb-32">
        <div className="flex justify-between mx-4 pt-4">
          <p>New Messages</p>
          <p>View All</p>
        </div>
      </div>
      <div className="box bg-gray-300 mx-6 mt-6 pb-32">
        <div className="flex justify-between mx-4 pt-4">
          <p>New Contacts</p>
          <p>View All</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mx-4 pt-10">
          <p>Upcoming Events</p>
          <p>See Events</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mx-4 pt-10">
          <p>Recent Events</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
