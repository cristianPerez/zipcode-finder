import { Database, Entity } from 'fakebase';

interface Search extends Entity {
    id: string;
    zipcode: string;
    country: string;
    countryAbb: string;
    city?: string;
    state?: string;
}

const db = new Database('./src/db/data')

export const Search = db.table<Search>('searches')
