import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
      console.log(response.data);
    })
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView  style={styles.container}>
        <FlatList 
          data={projects} 
          keyExtractor={project => project.id}
          renderItem={({ item: project}) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
      </SafeAreaView>

    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  project: {
    color: '#fff',
    fontSize: 40,
  }
});