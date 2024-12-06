/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { getSelectedBreed } from "../Store/GetSelectedBreedDetailSlice";

export const BreedDetails = () => {
    const { breedId } = useParams();
    const dispatch = useDispatch();
    const { loading, breed, error } = useSelector(state => state.selectedCatBreed);

    useEffect(() => {
        dispatch(getSelectedBreed(breedId));
    }, [dispatch, breedId]);

    if (loading) return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
            <div role="status">
                <svg
                    aria-hidden="true"
                    className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center w-screen h-screen bg-red-50">
            <p className="text-red-600 font-semibold">Error fetching breed details!</p>
        </div>
    );

    return (
        <>
            <Navbar />
            <div className='w-screen h-screen bg-gradient-to-r from-purple-200 to-blue-100 items-center '>
                <div className=" justify-center items-center flex ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-xl border border-gray-200 w-full max-w-4xl">
                        <div className="flex flex-col items-center">
                            <img
                                className="lg:w-[400px] border-2 p-2 lg:h-[400px] w-[300px] h-[300px] rounded-lg"
                                src={breed[0]?.url}
                                alt="Breed image"
                            />
                            <a
                                href={breed[0]?.breeds[0]?.wikipedia_url}
                                className="mt-8 text-blue-500 hover:underline"
                            >
                                More info on Wikipedia
                            </a>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold text-[#44857c]"> {breed[0]?.breeds[0]?.name}</h1>
                            <p className="text-gray-600 text-justify">{breed[0]?.breeds[0]?.description}</p>
                            <p className="text-gray-800">
                                <span className="font-semibold">Temperament:</span> {breed[0]?.breeds[0]?.temperament}
                            </p>
                            <p className="text-gray-800">
                                <span className="font-semibold">Origin:</span> {breed[0]?.breeds[0]?.origin}
                            </p>
                            <p className="text-gray-800">
                                <span className="font-semibold">Intelligence:</span> {breed[0]?.breeds[0]?.intelligence}
                            </p>
                            <p className="text-gray-800">
                                <span className="font-semibold">Life Span:</span> {breed[0]?.breeds[0]?.life_span} years
                            </p>
                            <p className="text-gray-800">
                                <span className="font-semibold">Weight:</span> {breed[0]?.breeds[0]?.weight?.imperial} lbs
                                ({breed[0]?.breeds[0]?.weight?.metric} kg)
                            </p>
                            <div className="flex flex-col space-y-2">
                                <a
                                    href={breed[0]?.breeds[0]?.vcahospitals_url}
                                    className="text-blue-500 hover:underline"
                                >
                                    VCA Hospitals
                                </a>
                                <a
                                    href={breed[0]?.breeds[0]?.vetstreet_url}
                                    className="text-blue-500 hover:underline"
                                >
                                    Vetstreet
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BreedDetails;