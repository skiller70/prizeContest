import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import JoinCard from '../components/JoinCard'

const AllmostFull = () => {
  return (
    <ScrollView style={{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%"}}>
     <JoinCard/>
     <JoinCard/>
     <JoinCard/>
     <JoinCard/>
     <JoinCard/>
     <JoinCard/>
     <JoinCard/>
     <JoinCard/>
    </ScrollView>
  )
}

export default AllmostFull