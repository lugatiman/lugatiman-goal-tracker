import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        M Y  S W E E T I E 
      </Text>
      <Link style={styles.link} href="/goals">
        View Your Goals
      </Link>
      <Link style={styles.link} href="/goals/create">
        Add a New Goal
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    marginVertical: 40,
    fontSize: 28,
  },
  link: {
    marginVertical: 20,
    padding: 16,
    backgroundColor: '#f1a0f1ff',
    color: 'white',
    borderRadius: 8,
  },
})

export default Home