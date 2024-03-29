import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../grapghqlClient";

const find = (name, setDataArray)=>{
  const finalSetDisplay=[]
  for(let i =0;i< setDataArray.length;i++){
    if(setDataArray[i].exercise === name){
      finalSetDisplay.push(setDataArray[i]);
    }
  }
  return finalSetDisplay;
}
const setData = (data,name) => {
  const setDataArray = data.sets.documents;
  return find(name, setDataArray);
  console.log(finalSetDisplay);
};


const exerciseQuery = gql`
  query sets {
    sets {
      documents {
        _id
        exercise
        reps
        weights
      }
    }
  }
`;

const SetLists = ({name}) => {
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["sets",name],
    queryFn: () => graphqlClient.request(exerciseQuery, {exercise : name}),
  });
  
  let finalSetDisplay = [];
  // console.log("data",data);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  else{
    
    finalSetDisplay =  setData(data,name);
  }
  if (error) {
    return <Text>Error</Text>;
  }
  //   console.log(data.sets.documents);
  return (
    
    <FlatList
      data={ finalSetDisplay}
      renderItem={(items) => {
        // console.log(items.item);
        return (
          <View>
            <Text>
              {items.item.reps} x {items.item.weights}
            </Text>
          </View>
        );
      }}
    />
  );
};
export {setData}
export default SetLists;
