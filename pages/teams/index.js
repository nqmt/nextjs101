import Layout from "../../components/layout";
import Link from 'next/link'

export async function getServerSideProps(context) {
  const res = await fetch('https://b0b018d627eafa8c46c6d0910b0896c6.m.pipedream.net/')
  const teams = await res.json()
  return {
    props: {
      teams: teams
    }
  }
}

export default function Teams({ teams }) {
  return (
    <Layout title="Teams pages">
      <h1>Teams pages</h1>
      <ul>
        {teams.map(team => (
          <Link href={`teams/${team.id}`} key={team.id}>
            <a>
              <li>{team.id} {team.value}</li>
            </a>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}
