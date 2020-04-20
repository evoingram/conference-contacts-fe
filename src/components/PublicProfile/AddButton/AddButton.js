import React from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { useParams, useNavigate } from '@reach/router';
import gql from 'graphql-tag';



const AddButton  = ({params, navigate}) => {
    //Reach Router Hook to get params from route
    // const params = useParams();
    //Reach Router Hook to navigate to different page
    // const navigate = useNavigate();
    
    //ApolloCache Client
    const client = useApolloClient();
    
    //queries the Apollo client cache to see if user is logged in
    const {isLoggedIn} = client.readQuery({
        query: gql`
            query ReadLoggedIn {
                isLoggedIn
            }
        `
    });



    //Btn OnClickHandler
    const connectUser = () => {
        client.writeData({data: {profileId: params.id}});
        // console.log(params.id);
        // console.log(client.cache.data);
        // console.log(isLoggedIn);
        // console.log(user);
       
        navigate('/');
    }


    return(
        <div className="flex justify-center">
            {isLoggedIn &&
            <button className="mobile:w-2/3 rounded-full my-12 px-16 bg-purple-700 text-white w-2/5 py-1" onClick={connectUser}>Send Request</button> 
            }

            {!isLoggedIn && 
                <button>Sign In/Join to Send Request</button>
            } 
        </div>
    )
}

export default AddButton;