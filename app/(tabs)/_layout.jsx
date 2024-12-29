import { Tabs } from "expo-router"
import { HomeIcon as Home,  HeartIcon as Heart } from "react-native-heroicons/solid";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'gray'}} >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Quotes',
                    tabBarIcon: ({ color }) => <Home color={color} />
                }} 
            />

            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <Heart color={color} />
                }}
            />
        </Tabs>
    )
}