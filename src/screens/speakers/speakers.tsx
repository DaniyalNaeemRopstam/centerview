import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import Theme from '../../utils/theme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import fonts from '../../utils/fonts';
import Circle from '../../components/backgroundCircle';
import axiosWrapper from '../../services/AxiosWrapper';
import { API_URLS } from '../../services/apiPathList';

export default function Speakers(props?: any) {
  const [speakers] = useState([
    {
      name: 'Mark Milley',
      image: require('../../assets/speakers/Alex.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.

General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.

While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.

General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Stephen colbert',
      image: require('../../assets/speakers/Ben.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Arthur Brooks',
      image: require('../../assets/speakers/Chloe.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'David Milley',
      image: require('../../assets/speakers/David.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.
      
      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Emily Milley',
      image: require('../../assets/speakers/Emily.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Felix Milley',
      image: require('../../assets/speakers/Felix.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Grace Milley',
      image: require('../../assets/speakers/Grace.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Henry Milley',
      image: require('../../assets/speakers/Henry.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Isabella Milley',
      image: require('../../assets/speakers/Isabella.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Jack Milley',
      image: require('../../assets/speakers/Jack.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Lily Milley',
      image: require('../../assets/speakers/Lily.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Noah Milley',
      image: require('../../assets/speakers/Noah.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Olivia Milley',
      image: require('../../assets/speakers/Olivia.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
    {
      name: 'Sophia Milley ',
      image: require('../../assets/speakers/Sophia.png'),
      detail: `General Mark A. Milley served as the 20th Chairman of the Joint Chiefs of Staff, the nation’s highest-ranking military officer, and the principal military advisor to the President, Secretary of Defense, and National Security Council. He retired Sept. 29, 2023.

      Prior to becoming Chairman on October 1, 2019, General Milley served as the 39th Chief of Staff of the U.S. Army.
      A native of Massachusetts, General Milley graduated from Princeton University in 1980, where he received his commission from Army ROTC.
      
      General Milley has had multiple command and staff positions in six divisions and a Special Forces Group throughout the last 44 years to include command of the 1st Battalion, 506th Infantry, 2nd Infantry Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy Commanding General, 101st Airborne Division (Air Assault); Commanding General, 10th Mountain Division; Commanding General, III Corps; and Commanding General, U.S. Army Forces Command.
      
      While serving as the Commanding General, III Corps, General Milley deployed as the Commanding General, International Security Assistance Force Joint Command and Deputy Commanding General, U.S. Forces Afghanistan. General Milley’s joint assignments also include the Joint Staff operations directorate and as Military Assistant to the Secretary of Defense.
      
      General Milley’s operational deployments include the Multi-National Force and Observers Task Force, Sinai, Egypt; Operation JUST CAUSE, Panama; Operation UPHOLD DEMOCRACY, Haiti; Operation JOINT FORGE, Bosnia-Herzegovina; Operation IRAQI FREEDOM, Iraq; and three tours during Operation ENDURING FREEDOM, Afghanistan. GEN Milley also deployed to Colombia, Somalia and served two years on the DMZ in the Republic of Korea.
      In addition to his bachelor’s degree in political science from Princeton University, General Milley has a master’s degree in international relations from Columbia University and one from the U.S. Naval War College in national security and strategic studies. He is also a graduate of the MIT Seminar XXI National Security Studies Program.
      General Milley and his wife, Hollyanne, have been married for more than 38 years and have two children.`,
    },
  ]);

  const [loader, setLoader] = useState(false)
  const [speakerData, setSpeakersData] = useState([]);

  useEffect(()=>{
    getSpeakersDetail();
  },[])

  const getSpeakersDetail = async () =>{
    try{
      setLoader(true)
      let response = await axiosWrapper('GET', API_URLS.GET_SPEAKERS);
      setSpeakersData(response);

    }catch(e){
    }finally{
      setLoader(false)
    }

  }

  const renderSpeakers = ({item, index}: any) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.speakerCard}
        onPress={() =>
          props?.navigation?.navigate('SPEAKERSDETAIL', {speaker: {...item, detail:item?.content?.rendered}})
        }>
        <Image source={{uri:item?.jetpack_featured_media_url || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'  }} style={styles.speakerImg} />
        <Text style={styles.speakerName} numberOfLines={2}>{item?.title?.rendered}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Circle />
      
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.flatListStyle}
        renderItem={renderSpeakers}
        data={speakerData}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
        ListEmptyComponent={loader ? <ActivityIndicator size={'large'} color={'black'}  /> : <Text>No Speaker found</Text>}
      />
      
    </>
  );
}

const styles = StyleSheet.create({
  flatListStyle: {
    marginTop: heightPercentageToDP(12),
    paddingTop: heightPercentageToDP(3),

  },
  contentContainerStyle:{
    paddingBottom:heightPercentageToDP(3)

  },
  columnWrapperStyle: {
    flexWrap: 'wrap',
    paddingHorizontal: widthPercentageToDP(4),
    columnGap: widthPercentageToDP(7),
  },
  speakerCard: {
    width: widthPercentageToDP(25.9),
    height:heightPercentageToDP(16),
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: Theme.WHITE_COLOR,
    paddingHorizontal: widthPercentageToDP(5),
    paddingVertical: heightPercentageToDP(1.6),
    marginBottom: heightPercentageToDP(2.5),
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
  },
  speakerImg: {width: 60, height: 60, borderRadius: 60 / 2},
  speakerName: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Theme.JET_COLOR,
    marginTop: 6,
    width: widthPercentageToDP(15),
    textAlign: 'center',
  },
});
