import React from "react";
import Ingredient from './ingredient';

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

const MenuItem = ({ name,  price,
                images, merchart, currentPrice,
                cook_method,  time ,
                ingredient,
                distance, ratings, kcal}: ProductTypeList) => {
    return(
        <div className="food-card d-flex flex-column " key={name}>
            <div className="frame-parent d-flex flex-column position-relative">
                <div className="discount-wrapper">
                {
                    price && 
                    <b className="discount">GIẢM GIÁ</b>
                }
                </div>
                <div className="image-wrapper d-flex justify-content-center">
                    <img src={images ? images[0] : ''} alt="product" />
                </div>
            </div>
            <div className="card-info-wrapper d-flex flex-column">
                <div className="card-info d-flex flex-column gap-1">
                    <div className="food-and-chef-name d-flex flex-column gap-1">
                        <b>{name}</b>
                        <div className="chef-name">
                            <span className="font-weight-500">by </span>
                            <b className="name">{merchart}</b>
                        </div>
                    </div>
                    <div className="general-info d-flex gap-2">
                        <div className="d-flex align-items-center gap-2px">
                            <img className="small-icon" alt=""  src="/images/markerpin02.svg" />
                            <div className="kcal font-weight-600 yellowgreen-100">{kcal} Kcal</div>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <img className="small-icon"  alt=""     src="/images/star-icon1.svg"   />
                            <div className="text">{ratings}</div>
                        </div>
                        <div className="d-flex align-items-center gap-2px">
                            <img className="small-icon"alt="" src="/images/markerpin021.svg" />
                            <div className="text">{distance} km</div>
                        </div>
                        <div className="d-flex align-items-center gap-2px">
                            <img className="small-icon"alt=""  src="/images/timer.svg" />
                            <div className="text">{time} min</div>
                        </div>
                    </div>
                    <div className="ingredient-wrapper">
                        <span className="cooking-method font-weight-600 me-1">{cook_method}</span>
                        <span className="font-weight-500">| 
                            {ingredient.map( (item:IngredientType)=> (
                                <Ingredient name={item.name} />
                            ))}

                        </span>
                    </div>
                    <div className="pricing-wrapper d-flex align-items-center gap-2">
                        <div className="price-before">{price}</div>
                        <b className="price-after">{currentPrice}</b>
                    </div>
                    <div className="discount-up-to-wrapper d-flex align-items-center gap-1">
                        <img className="small-icon" alt=""
                            src="/images/frame-2729.svg"
                        />

                        <div className="discount-up-to">Ưu đãi đến 50k</div>
                    </div>
                    <div className="flavor-time-wrapper d-flex align-items-center gap-1">
                        <img className="small-icon" alt=""
                            src="/images/time.svg"
                        />

                        <div className="flavor-time">
                            Đặt trước 09:00 giờ sáng để điều chỉnh vị
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default MenuItem;