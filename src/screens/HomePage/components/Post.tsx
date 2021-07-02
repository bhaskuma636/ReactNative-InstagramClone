import React, { useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, Icon, Image, Input } from "react-native-elements";
import { Extrapolate, interpolateNode } from "react-native-reanimated";
import Animated from "react-native-reanimated";

interface PostProps {
  post: {
    user: {
      imageUrl: string;
      name: string;
    };
    post: {
      images: string[];
      likedBy: string;
      comments: {
        username: string;
        body: string;
      }[];
      commentCount: number;
      createdDate: string;
    };
  };
}

const { width } = Dimensions.get("window");
export default function Post({ post }: PostProps) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.headerContainer, ...styles.horizontalPadding }}>
        <View style={{ ...styles.headerLeft }}>
          <Image
            source={{ uri: post.user.imageUrl }}
            style={{ ...styles.avatar }}
          />
          <Text> {post.user.name} </Text>
        </View>
        <Icon name="ellipsis-h" type="font-awesome-5" size={15} />
      </View>

      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        {...{ onScroll }}
      >
        {post.post.images.map((image, index) => (
          <Image
            source={{ uri: image }}
            key={index}
            style={{ ...styles.postImage }}
          />
        ))}
      </Animated.ScrollView>

      <View style={{ ...styles.bottomContainer, ...styles.horizontalPadding }}>
        <View style={{ ...styles.headerLeft }}>
          <Icon
            name="heart"
            type="font-awesome-5"
            size={25}
            style={{ ...styles.button }}
          />
          <Icon
            name="comment"
            type="font-awesome-5"
            size={25}
            style={{ ...styles.button }}
          />
          <Icon
            name="send"
            type="font-awesome"
            size={25}
            style={{ ...styles.button }}
          />
        </View>

        <View style={{ ...styles.dotContainer }}>
          {post.post.images.length > 1 &&
            post.post.images.map((_, index) => {
              const scale = interpolateNode(scrollX, {
                inputRange: [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ],
                outputRange: [1, 1.3, 1],
                extrapolate: Extrapolate.CLAMP,
              });
              const opacity = interpolateNode(scrollX, {
                inputRange: [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ],
                outputRange: [0.2, 1, 0.2],
                extrapolate: Extrapolate.CLAMP,
              });
              return (
                <Animated.View
                  key={index}
                  style={{ ...styles.dot, opacity, transform: [{ scale }] }}
                />
              );
            })}
        </View>

        <Icon
          name="bookmark"
          type="font-awesome-5"
          size={25}
          style={{ ...styles.button }}
        />
      </View>

      <Text style={{ ...styles.horizontalPadding }}>
        Liked by{" "}
        <Text style={{ ...styles.boldText }}> {post.post.likedBy}</Text> and
        <Text style={{ ...styles.boldText }}> others</Text>
      </Text>

      <Text> View all {post.post.commentCount} comments </Text>

      {post.post.comments.map((comment, index) => (
        <Text key={index} style={{ ...styles.commentContainer }}>
          <Text style={{ ...styles.boldText }}> {comment.username} </Text>
          <Text> {comment.body} </Text>
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalPadding: {
    paddingHorizontal: 20,
  },
  container: {
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 15,
  },
  headerLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 8,
  },

  postImage: {
    width,
    alignSelf: "center",
    aspectRatio: 1,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginVertical: 10,
  },
  button: {
    marginHorizontal: 6,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#333",
    marginHorizontal: 2,
  },
  boldText: {
    fontWeight: "bold",
  },

  commentContainer: {
    marginVertical: 3,
  },

  input: {
    borderWidth: 0,
  },
});
