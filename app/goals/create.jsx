import { useState } from 'react'
import { StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGoals } from '../../hooks/useGoals'
import { useRouter } from 'expo-router'

const Create = () => {
  const [goal, setGoal] = useState('')
  const{ createGoal } = useGoals()
  const router = useRouter
  
  const handleSubmit = async () => {
    await createGoal({
      goal,
      progress:0
    })
    seatGoals('')
    Keyboard.dismiss()
    router.push('/goals')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a New Goal</Text>

      <TextInput
        style={styles.input}
        placeholder="My goals in life?"
        value={goal}
        onChangeText={setGoal}
      />

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={{color: 'white'}}>Add New Goal</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  input: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 50,
    marginVertical: 40,
  },
  button: {
    padding: 18,
    backgroundColor: '#FF69B4',
    color: 'white',
    borderRadius: 50,
  }
})