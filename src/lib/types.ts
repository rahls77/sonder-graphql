import { Collection, ObjectId } from "mongodb";

export interface Listing {
    _id: ObjectId;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfBeds: number;
    numOfBaths: number;
    numOfGuests: number;
    rating: number;
}

export interface Database {
    listings: Collection<Listing>;
} 