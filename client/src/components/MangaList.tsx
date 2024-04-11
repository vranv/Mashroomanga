import React, { useState } from 'react'
import ModalMushroom from './ModalMushroom';


export default function MangaList() {
    const [mushroom, setMushroom] = useState(false);

    const mashList = [
        {
            "id": "1",
            "name_engl": "Field mushroom",
            "name_lat": "Agaricus campestris",
            "created_by_user_id": 1,
            "created_at": "2023-03-01T12:00:00Z",
            "updated_by_user_id": 1,
            "updated_at": "2023-03-01T12:00:00Z",
            "description": "Agaricus campestris is a common mushroom found in grassy areas.",
            "wiki": "Agaricus campestris is a species of mushroom in the family Agaricaceae. It is commonly known as the field mushroom or meadow mushroom. It is a common mushroom found in grassy areas, particularly in the northern hemisphere. It is a popular edible mushroom, known for its firm texture and rich, earthy flavor.",
            "commercially_harvested": "Yes",
            "commercially_cultivated": "Yes",
            "color": "Brown",
            "shape": "Round",
            "size": "Medium",
            "edibility": "Edible",
            "gathering_season": "Summer",
            "habitat": "Grassy areas",
            "preparation": "Can be eaten raw or cooked.",
            "medical_uses": "None known.",
            "nutritional_value": 34,
            "similar_species": "Agaricus arvensis",
            "conservation_status": "Least concern"
        },
        {
            "id": "2",
            "name_engl": "Penny Bun",
            "name_lat": "Boletus edulis",
            "created_by_user_id": 2,
            "created_at": "2023-03-02T12:00:00Z",
            "updated_by_user_id": 2,
            "updated_at": "2023-03-02T12:00:00Z",
            "description": "Boletus edulis is a highly prized edible mushroom.",
            "wiki": "Boletus edulis, commonly known as the porcini or cep, is a species of fungus in the family Boletaceae. It is a highly prized edible mushroom, known for its rich, nutty flavor and firm texture. It is found in deciduous and coniferous forests throughout the northern hemisphere, particularly in Europe and North America. It is a popular ingredient in many dishes, including risottos, pastas, and soups.",
            "commercially_harvested": "Yes",
            "commercially_cultivated": "No",
            "color": "Brown",
            "shape": "Round",
            "size": "Large",
            "edibility": "Edible",
            "gathering_season": "Fall",
            "habitat": "Deciduous and coniferous forests",
            "preparation": "Can be eaten raw or cooked.",
            "medical_uses": "None known.",
            "nutritional_value": 45,
            "similar_species": "Boletus aereus",
            "conservation_status": "Least concern"
        },
        {
            "id": "3",
            "name_engl": "Chanterelle",
            "name_lat": "Cantharellus cibarius",
            "created_by_user_id": 3,
            "created_at": "2023-03-03T12:00:00Z",
            "updated_by_user_id": 3,
            "updated_at": "2023-03-03T12:00:00Z",
            "description": "Cantharellus cibarius is a popular edible mushroom.",
            "wiki": "Cantharellus cibarius, commonly known as the chanterelle, is a species of fungus in the family Cantharellaceae. It is a popular edible mushroom, known for its fruity, peppery flavor and firm texture. It is found in deciduous and coniferous forests throughout the northern hemisphere, particularly in Europe and North America. It is a popular ingredient in many dishes, including soups, stews, and sauces.",
            "commercially_harvested": "Yes",
            "commercially_cultivated": "No",
            "color": "Orange",
            "shape": "Conical",
            "size": "Medium",
            "edibility": "Edible",
            "gathering_season": "Summer and Fall",
            "habitat": "Deciduous and coniferous forests",
            "preparation": "Can be eaten raw or cooked.",
            "medical_uses": "None known.",
            "nutritional_value": 28,
            "similar_species": "Cantharellus formosus",
            "conservation_status": "Least concern"
        },
        {
            "id": "4",
            "name_engl": "Delicious Milk Cap",
            "name_lat": "Lactarius deliciosus",
            "created_by_user_id": 4,
            "created_at": "2023-03-04T12:00:00Z",
            "updated_by_user_id": 4,
            "updated_at": "2023-03-04T12:00:00Z",
            "description": "Lactarius delicious is a popular edible mushroom.",
            "wiki": "Lactarius delicious, commonly known as the saffron milk cap, is a species of fungus in the family Russulaceae. It is a popular edible mushroom, known for its bright orange color and mild, slightly sweet flavor. It is found in coniferous forests throughout the northern hemisphere, particularly in Europe and North America. It is a popular ingredient in many dishes, including pastas and risottos.",
            "commercially_harvested": "Yes",
            "commercially_cultivated": "No",
            "color": "Orange",
            "shape": "Round",
            "size": "Medium",
            "edibility": "Edible",
            "gathering_season": "Summer and Fall",
            "habitat": "Coniferous forests",
            "preparation": "Can be eaten raw or cooked.",
            "medical_uses": "None known.",
            "nutritional_value": 32,
            "similar_species": "Lactarius deterrimus",
            "conservation_status": "Least concern"
        },
        {
            "id": "5",
            "name_engl": "Yellow morel",
            "name_lat": "Morchella esculenta",
            "created_by_user_id": 5,
            "created_at": "2023-03-05T12:00:00Z",
            "updated_by_user_id": 5,
            "updated_at": "2023-03-05T12:00:00Z",
            "description": "Morchella esculenta is a highly prized edible mushroom.",
            "wiki": "Morchella esculenta, commonly known as the morel, is a species of fungus in the family Morchellaceae. It is a highly prized edible mushroom, known for its honeycomb-like structure and rich, earthy flavor. It is found in deciduous and coniferous forests throughout the northern hemisphere, particularly in Europe and North America. It is a popular ingredient in many dishes, including soups, stews, and sauces.",
            "commercially_harvested": "Yes",
            "commercially_cultivated": "No",
            "color": "Brown",
            "shape": "Honeycomb-like",
            "size": "Medium to Large",
            "edibility": "Edible",
            "gathering_season": "Spring",
            "habitat": "Deciduous and coniferous forests",
            "preparation": "Can be eaten raw or cooked.",
            "medical_uses": "None known.",
            "nutritional_value": 30,
            "similar_species": "Morchella elata",
            "conservation_status": "Least concern"
        }
    ];

    return (
        <div className='flex justify-center items-center flex-col border-t-[1px] border-black space-y-2'>
            {mushroom && <ModalMushroom />}
            <h1 className='text-center border-b-[1px] border-black'>list of mangroom on-line - latest mushrooms</h1>
            {mashList.map((mushroom)=>{
                return (
                    <div className='flex flex-wrap border border-black' key={mushroom.id}>
                        <a href="/mushroom">
                            <img className='size-44' src="lightygrenmush.webp" alt="bioluminescent green mushroom" />
                        </a>
                        {/* manga list, iterable? */}
                        <div className=''>
                            <h3>
                                <a href="" onClick={()=>setMushroom(!mushroom)}>{mushroom.name_engl}</a>
                            </h3>
                            <i>
                                <span title='latin name'>{mushroom.name_lat}</span>
                            </i>
                            <p className='space-x-4'>
                                <i>edibility:</i>
                                <a href="">{mushroom.edibility}</a>
                            </p>
                            <p className='space-x-4'>
                                <i>Nutritional value:</i>
                                <a href="">{mushroom.nutritional_value}</a>
                            </p>
                            <p className='space-x-4'>
                                <i>time uploaded:</i>
                                <a href="">{mushroom.created_at}</a>
                            </p>
                        </div>
                    </div>   
                );
            })}
        </div>
    )
}
