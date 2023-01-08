// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import { postDetailQuery } from '../../../utils/queries'
import { uuid } from 'uuidv4';

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        const { id } = req.query
        const query = postDetailQuery(id)
        const data = await client.fetch(query)
        res.status(200).json(data[0])
    } else if (req.method === 'PUT') {
        const { comment, userId, at } = req.body
        const { id }: any = req.query
        const postedBy = { _type: 'postedBy', _ref: userId }
        const data: any = await client.patch(id).setIfMissing({ comments: [] }).insert('after', 'comments[-1]', [
            {
                comment,
                postedBy,
                at,
                _key: uuid(),
            }
        ]).commit()
        res.status(200).json(data);

    }
}
