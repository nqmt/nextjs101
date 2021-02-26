import Layout from "../../components/layout";

const mockTeam = {
  "1": 'It was a concerning development that he couldn\'t get out of his mind. He\'d had many friends throughout his early years and had fond memories of playing with them, but he couldn\'t understand how it had all stopped. There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last.',
  "2": 'She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She\'s resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.',
  "3": 'She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She\'s resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.',
}

export async function getServerSideProps(context) {
  if (!mockTeam[context.params.id]) {
    return {
      redirect: {
        destination: '/teams',
        statusCode: 404,
      },
    }
  }
  
  return {
    props: {
      id: context.params.id,
      text: mockTeam[context.params.id]
    }
  }
}

export default function Team({id, text}) {
  return (
    <Layout title="Teams pages">
      <h1>{id}</h1>
      <p>{text}</p>
    </Layout>
  )
}
