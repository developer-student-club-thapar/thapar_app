import { gql, useQuery, NetworkStatus } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'


const GET_USERS = gql`
{
  allUsers{
    edges{
      node{
        username
      }
    }
  }
}
`;

function About() {
  const {loading , error , data , networkStatus} = useQuery(

    GET_USERS,
    {
      notifyOnNetworkStatusChange: true,
    }
  )
  if(error) return <div>{error}</div>
  if(loading) return <div>{loading}</div>
  data.allUsers.edges.map((ob)=>{
    console.log(ob.node.username)
  })
  return(
  <div>{data.allUsers.edges[0].node.username}</div>
  )
}


export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_USERS,
    })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  
  }
}



export default About;
