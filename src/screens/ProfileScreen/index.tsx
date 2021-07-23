import React, { useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Stories from "../HomeScreen/components/Stories";

interface ProfileProps {}
const HORIZONTAL_PADDING = 20;
const { width } = Dimensions.get("window");
const IMAGES = [
  "https://images.unsplash.com/photo-1591448764624-d7973a442bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1606599265085-ee132d0e41c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1621086641979-5bf548837be9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1606864034826-111e5945de8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1541290431335-1f4c2152e899?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1608726869925-4cb9aca1f97d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3RhZ3JhbSUyMHBvc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568226940395-d125946a2bb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
const TAGGED_IMAGES = [
  "https://images.unsplash.com/photo-1606599265085-ee132d0e41c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1591448764624-d7973a442bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1606864034826-111e5945de8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568226940395-d125946a2bb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1621086641979-5bf548837be9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuemFyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1608726869925-4cb9aca1f97d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3RhZ3JhbSUyMHBvc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1541290431335-1f4c2152e899?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
export default function Profile() {
  const scrollX = useSharedValue(0);
  const scrollRef = useRef(null);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const changeGrid = (value: number) => {
    scrollX.value = withTiming(value * width);
    scrollRef.current?.scrollTo({ x: value * width, animated: true });
  };
  const navBorderStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [0, width],
      [0, scrollX.value / 2]
    );
    return {
      width: width / 2,
      height: 2,
      backgroundColor: "#333",
      marginVertical: 5,
      transform: [{ translateX }],
    };
  }, [scrollX.value]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{ ...styles.topContainer, ...styles.containerWithPadding }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507499036636-f716246c2c23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHx1c2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            }}
            style={{ ...styles.image }}
          />
          <View style={{ ...styles.statusContainer }}>
            <View style={{ ...styles.status }}>
              <Text> 25 </Text>
              <Text> Posts</Text>
            </View>
            <View style={{ ...styles.status }}>
              <Text> 994 </Text>
              <Text> Followers</Text>
            </View>
            <View style={{ ...styles.status }}>
              <Text> 524 </Text>
              <Text> Following</Text>
            </View>
          </View>
        </View>

        <View
          style={{ ...styles.bioContainer, ...styles.containerWithPadding }}
        >
          <Text style={{ ...styles.bioText }}>Fatih Kayan</Text>
          <Text style={{ ...styles.bioText, ...styles.lightText }}>
            Personal Blog
          </Text>
          <Text style={{ ...styles.bioText }}>
            ❤️Mustafa Kemal Atatürk❤️ {"\n"} Denizli / Burdur {"\n"} AAL {"\n"}{" "}
            MAKU {"\n"} Electrical and Electronics Engineering {"\n"} Junior
            software developer 💻
          </Text>
        </View>

        <View style={{ ...styles.containerWithPadding }}>
          <Pressable
            onPress={() => console.log("aaa")}
            style={styles.editProfileButton}
          >
            <Text style={styles.buttonText}> Edit Profile </Text>
          </Pressable>
          <View style={{ ...styles.buttonContainer }}>
            <Pressable
              onPress={() => console.log("aaa")}
              style={styles.editProfileButton}
            >
              <Text style={styles.buttonText}> Promotions </Text>
            </Pressable>
            <Pressable
              onPress={() => console.log("aaa")}
              style={{ ...styles.editProfileButton, ...styles.middleButton }}
            >
              <Text style={styles.buttonText}> Insights </Text>
            </Pressable>
            <Pressable
              onPress={() => console.log("aaa")}
              style={styles.editProfileButton}
            >
              <Text style={styles.buttonText}> Contact </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Stories />
        </View>

        <View style={styles.navContainer}>
          <Icon name="grid-on" size={30} onPress={() => changeGrid(0)} />
          <Icon
            name="perm-contact-cal"
            size={30}
            onPress={() => changeGrid(1)}
          />
        </View>

        <Animated.View style={navBorderStyle} />

        <View>
          <Animated.ScrollView
            {...{
              onScroll,
              horizontal: true,
              showsHorizontalScrollIndicator: false,
              pagingEnabled: true,
            }}
            ref={scrollRef}
          >
            <View style={{ ...styles.userPostsContainer }}>
              {IMAGES.map((image, index) => (
                <Image
                  source={{ uri: image }}
                  key={index}
                  style={{
                    ...styles.userPost,
                    marginHorizontal: index % 3 === 1 ? 3 : 0,
                  }}
                />
              ))}
            </View>
            <View style={{ ...styles.userPostsContainer }}>
              {TAGGED_IMAGES.map((image, index) => (
                <Image
                  source={{ uri: image }}
                  key={index}
                  style={{
                    ...styles.userPost,
                    marginHorizontal: index % 3 === 1 ? 3 : 0,
                  }}
                />
              ))}
            </View>
          </Animated.ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWithPadding: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginRight: 40,
  },
  statusContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    alignItems: "center",
  },

  bioContainer: {
    marginTop: 15,
  },
  bioText: {
    fontSize: 13,
    lineHeight: 20,
  },
  lightText: {
    color: "#8E8E8E",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  editProfileButton: {
    flex: 1,
    borderWidth: 1,
    paddingVertical: 7,
    borderColor: "#cbcbcb",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  middleButton: {
    marginHorizontal: 5,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  userPostsContainer: {
    width,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userPost: {
    width: width / 3 - 2,
    height: width / 3 - 2,
  },
  taggedPosts: {
    width,
    height: 250,
    backgroundColor: "red",
  },
});
