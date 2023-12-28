import React from "react";
import MenuItem from "@components/menu-item/index";
import MenuItemTitle from "@components/menu-item/menu-item-title";
import useSwr from 'swr';
import {fetcher} from '@utils/fetcher';
//import { MenuItemList } from '@types/menu-item.type.ts';

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

const InterestingFood = () => {
    const { data } = useSwr('/api/products', fetcher);

    if (!data) return <div>Loading</div>;
    return(
        <div className="attractive-dishes-section d-flex flex-column w-100">
            <div className="title-section d-flex justify-content-between align-items-end w-100">
               	<div className="title-and-sub-title flex-grow-1 d-flex flex-column">
	                <div className="card-title">
	                    Hấp dẫn
	                </div>
	                <div className="sub-title">
	                    Khám phá món hấp dẫn xung quanh bạn
	                </div>
	            </div>
                
            </div>
            <div className="food-cards d-flex justify-content-between py-4">
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
    )
};


export default InterestingFood;
