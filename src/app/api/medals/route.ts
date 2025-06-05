import { NextRequest } from 'next/server';
import data from './medals.json';

import sortMedals from '@/helpers/sortMedals';

 export async function GET( request: NextRequest,
     context: { params: { sort: string } }) {
     const searchParams = request.nextUrl.searchParams;
     let sortParam = searchParams.get('sort');
    let sortedData = sortMedals(data, sortParam);
    return Response.json({ msg: sortParam, data:sortedData});
}