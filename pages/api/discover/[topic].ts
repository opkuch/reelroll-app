// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import { topicPostsQuery } from '../../../utils/queries'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        const { topic } = req.query
        const query = topicPostsQuery(topic)
        const data = await client.fetch(query)
        res.status(200).json(data)
    }
}
