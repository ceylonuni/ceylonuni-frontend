import React from "react";
import logo from "./cu.png";
import video from "./video.mp4";
import video2 from "./video2.mp4";
import sample from "./sample.jpg";
import sample2 from "./sample2.jpg";
import { Avatar } from "primereact/avatar";
import "./home.css";

export default function Home() {
  return (
    <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow">
      <aside class="w-fixed w-full flex-shrink flex-grow-0 ps-4 cu-side-menu sticky top-0 md:border-b-0 border-b-2 md:border-r-2 z-50">
        <div class="p-4 rounded-xl w-full h-full overflow-hidden hover:overflow-auto">
          <ul class="flex sm:flex-col content-center justify-center">
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-home"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Home
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-calendar-times"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Events
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-book"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Study
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main
        role="main"
        class="w-full flex flex-col flex-grow pt-1 px-3 items-center "
      >
        <div>
          <div class="max-w-3xl rounded border-gray-200 border overflow-hidden shadow-md my-5 cu-card-home">
            <img class="w-full" src={sample} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div class="max-w-3xl rounded border-gray-200 border overflow-hidden shadow-md my-5 cu-card-home">
            <img class="w-full" src={sample2} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div class="max-w-3xl rounded border-gray-200 border overflow-hidden shadow-md my-5 cu-card-home">
            <video autoplay muted loop controls class="w-full">
              <source src={video} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div class="max-w-3xl rounded border-gray-200 border overflow-hidden shadow-md my-5 cu-card-home">
            <video autoplay muted loop controls class="w-full">
              <source src={video2} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </main>
      <aside class="w-fixed w-full flex-shrink flex-grow-0 ps-4 cu-side-menu sticky top-0 md:border-t-0 border-t-2 md:border-l-2 ">
        <div class="p-4 rounded-xl w-full h-full overflow-hidden hover:overflow-auto">
          <ul class="flex sm:flex-col content-center justify-center">
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-home"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Home
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-calendar-times"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Events
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-book"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Study
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-home"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Home
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-calendar-times"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Events
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-book"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Study
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-home"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Home
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-calendar-times"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Events
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-book"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Study
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-home"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Home
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-calendar-times"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Events
                </span>
              </a>
            </li>
            <li class="my-2 py-2 hover:bg-teal-100 rounded">
              <a className="flex items-center" href="#;">
                <Avatar
                  icon="pi pi-book"
                  size="large"
                  shape="circle"
                  className="mx-3 py-0 text-teal-50 bg-gradient-to-r from-teal-500 to-green-500"
                />
                <span className="text-xl font-bold text-teal-600 hidden sm:inline">
                  Study
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    // <div className="flex items-center p-3 cu-menu">
    //  <img src={logo} className="w-10" alt="logo" /> <b className="text-teal-500 text-3xl ml-2">ceylonuni</b>
    //  <TabMenu model={items}  className="cu-menu"/>
    // </div>
  );
}
