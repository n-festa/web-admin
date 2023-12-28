import React from "react";
import MenuItem from "@components/menu-item/index";
import MenuItemTitle from "@components/menu-item/menu-item-title";
import useSwr from 'swr';
import {fetcher} from '@utils/fetcher';
//import { MenuItemList } from '@types/menu-item.type.ts';

export type TransType = {
  title:  string;
} 

export type IngredientType = {
  name?: number | string;
} 

export type ProductTypeList = {
  id: string;
  name: string;
  price: string;
  discount?: string;
  merchart: string;
  currentPrice?: number;
  images: string[];
  cook_method:string;
  time: number;
  distance: number;
  ratings: number;
  kcal: string;
  ingredient: Array<IngredientType>,
}

const Today = ({title}:TransType) => {
    const { data } = useSwr('/api/products', fetcher);

    if (!data) return <div>Loading</div>;
    return(
        <section className="daily-food-section d-flex flex-column">
            <div className="container d-flex flex-column align-items-center gap-5">
                <b className="title">{title}</b>
                <div className="food-cards d-flex justify-content-between">
                    {data.map((item:ProductTypeList) =>(
                        <MenuItem key={item.id} 
                            id={item.id}
                            name={item.name}
                            images={item.images} 
                            merchart={item.merchart}
                            cook_method={item.cook_method}
                            currentPrice={item.currentPrice}
                            price={item.price}
                            ingredient ={ item.ingredient}
                            kcal = {item.kcal}
                            time={item.time}
                            distance={item.distance}
                            ratings={item.ratings}
                        />
                    ))}
                </div>
            </div>

            <div id="order-section1">
            </div>
        </section>
    )
};


export default Today;
