import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Post from "./Post";

interface PostsProps {}

const POSTS = [
  {
    user: {
      imageUrl:
        "https://images.unsplash.com/photo-1568226940395-d125946a2bb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "angela_danny",
    },
    post: {
      images: [
        "https://images.unsplash.com/photo-1608726869925-4cb9aca1f97d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3RhZ3JhbSUyMHBvc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ],
      likedBy: "mustafavrr",
      comments: [
        {
          username: "selnanz",
          body: "kesin böylesin",
        },
      ],
      commentCount: 36,
      createdDate: "2021-07-19:22:26.362Z",
    },
  },
  {
    user: {
      imageUrl:
        "https://images.unsplash.com/photo-1541290431335-1f4c2152e899?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "simon",
    },
    post: {
      images: [
        "https://images.unsplash.com/photo-1591448764624-d7973a442bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1606599265085-ee132d0e41c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1621086641979-5bf548837be9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1606864034826-111e5945de8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ],
      likedBy: "einzeln_1",
      comments: [
        {
          username: "talhabaturalpisik",
          body: "evet",
        },
        {
          username: "mert.tknr",
          body: "@rhymgedon Bu kalitesiz takımlarda çalıştığı gerçeğini değiştiriyor mu :d?",
        },
      ],
      commentCount: 239,
      createdDate: "2021-07-02T16:22:26.362Z",
    },
  },
];

export default function Posts() {
  return (
    <ScrollView>
      {POSTS.map((post, index) => (
        <Post {...{ post }} key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
