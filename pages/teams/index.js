import Layout from "../../components/layout";
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Teams() {
  const {data = []} = useSWR('https://b0b018d627eafa8c46c6d0910b0896c6.m.pipedream.net/', fetcher)

  return (
    <Layout title="Teams pages">
      <h1>Teams pages</h1>
      <ul>
        {data.map(team => (
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
