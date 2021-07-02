import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Story from "./Story";

interface StoriesProps {}

const STORIES = [
  {
    name: "fatihkayann20",
    imageUrl:
      "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/49906797_380124925925082_1601135169106870272_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=637wdSBqFN8AX_JIamb&tn=hVRdPgI3BYoFMwoO&edm=ABfd0MgBAAAA&ccb=7-4&oh=586f31310773ed590c3ddcf7efdc2b0a&oe=60E59D72&_nc_sid=7bff83",
  },

  {
    name: "engindemirog",
    imageUrl:
      "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/189337287_157068476387605_5806488396190982072_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=8LXeBDTX0kIAX82HSa_&edm=ALlQn9MBAAAA&ccb=7-4&oh=87fd1550722c312db9add4c36633116a&oe=60E6592A&_nc_sid=48a2a6",
  },
  {
    name: "yasinunalcetin",
    imageUrl:
      "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/206260803_767053870646474_4599444697995669275_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=XfC6oHkTrT4AX9ukqmR&edm=ALlQn9MBAAAA&ccb=7-4&oh=b0e09065b6b46d1d82ebc0e5e8f0ca91&oe=60E70653&_nc_sid=48a2a6",
  },
  {
    name: "esrasnck",
    imageUrl:
      "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122159938_174601314207643_6912668928673012528_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=eaHVKbrOu74AX_YJPtI&edm=ALlQn9MBAAAA&ccb=7-4&oh=c0c703f214b2060cb2f3bc45c8f5d60e&oe=60E6A79F&_nc_sid=48a2a6",
  },
  {
    name: "fatihkayann20",
    imageUrl:
      "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/49906797_380124925925082_1601135169106870272_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=637wdSBqFN8AX_JIamb&tn=hVRdPgI3BYoFMwoO&edm=ABfd0MgBAAAA&ccb=7-4&oh=586f31310773ed590c3ddcf7efdc2b0a&oe=60E59D72&_nc_sid=7bff83",
  },
  {
    name: "kerimcanoymak",
    imageUrl:
      "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/203872384_224962119267446_9195111104128955623_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=LwL8O9uFBtwAX8h34j-&edm=ALlQn9MBAAAA&ccb=7-4&oh=17655d24122b6aee222689d1802f25b1&oe=60E5AF4E&_nc_sid=48a2a6",
  },
];

export default function Stories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {STORIES.map((story, index) => (
        <Story key={index} {...{ story }} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
