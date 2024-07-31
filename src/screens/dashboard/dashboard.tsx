import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TotalEvents from '../../assets/SVG/totalEvents';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import TotalSpeakers from '../../assets/SVG/totalSpeakers';
import RegisterGreen from '../../assets/SVG/registerGreen';
import Theme from '../../utils/theme';
import Circle from '../../components/backgroundCircle';
import fonts from '../../utils/fonts';
import moment from 'moment';
import CustomButton from '../../components/buttons';

export default function Dashboard(props?: any) {
  const [registeredEvents] = useState([
    {
      name: 'Welcome Brunch',
      date: '2024-08-21T08:00:00.000000',
      location: 'Talavera Restaurant',
    },
    {
      name: 'Lunch Activity',
      date: '2024-08-21T08:00:00.000000',
      location: 'Talavera Restaurant',
    },
  ]);

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
      name: 'David',
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
      name: 'Emily',
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
      name: 'Felix',
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
      name: 'Grace',
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
      name: 'Henry',
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
      name: 'Isabella',
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
      name: 'Jack',
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
      name: 'Lily',
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
      name: 'Noah',
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
      name: 'Olivia',
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
      name: 'Sophia',
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

  const [activities] = useState([
    {
      name: 'Welcome Brunch',
      date: '2024-08-21T08:00:00.000000',
      location: 'Talavera Restaurant',
    },
    {
      name: 'Lunch Activity',
      date: '2024-08-21T08:00:00.000000',
      location: 'Talavera Restaurant',
    },
  ]);

  const renderRegisteredEvents = ({item, index}: any) => {
    const isoString = item?.date;
    const formattedDate = moment(isoString).format(
      'DD MMMM, YYYY [at] HH:mm A',
    );

    return (
      <View key={index} style={styles.eventCard}>
        <Text style={styles.eventName}>{item?.name}</Text>
        <Text style={styles.eventDate}>{formattedDate}</Text>
        <Text style={styles.eventLocation}>{item?.location}</Text>

        <CustomButton
          BtnContstyle={styles.unregisterBtn}
          text="Unregister Me!"
          textStyle={styles.unregisterTxt}
        />
      </View>
    );
  };

  const renderSpeakers = ({item, index}: any) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.speakerCard}
        onPress={() =>
          props?.navigation?.navigate('SPEAKERSDETAIL', {speaker: item})
        }>
        <Image source={item?.image} style={styles.speakerImg} />
        <Text style={styles.speakerName}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEvents = ({item, index}: any) => {
    const isoString = item?.date;
    const formattedDate = moment(isoString).format(
      'DD MMMM, YYYY [at] HH:mm A',
    );

    return (
      <View key={index} style={styles.eventCard}>
        <Text style={styles.eventName}>{item?.name}</Text>
        <Text style={styles.eventDate}>{formattedDate}</Text>
        <Text style={styles.eventLocation}>{item?.location}</Text>
        <CustomButton
          BtnContstyle={[styles.unregisterBtn, styles.registerBtn]}
          text="Register"
          textStyle={styles.unregisterTxt}
        />
      </View>
    );
  };

  return (
    <>
      <Circle />
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewCont}>
        <View style={styles.topTilesCont}>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate('EVENTS')}
            style={styles.topTile}>
            <TotalEvents />
            <View>
              <Text style={styles.totalNumbers}>12</Text>
              <Text style={styles.total}>Total Activities</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props?.navigation?.navigate('SPEAKERS')}
            style={styles.topTile}>
            <TotalSpeakers />
            <View>
              <Text style={styles.totalNumbers}>17</Text>
              <Text style={styles.total}>Total Speakers</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => props?.navigation?.navigate('REGISTEREDEVENTS')}
          style={[styles.topTile, styles.topBottomTiles]}>
          <RegisterGreen />
          <View>
            <Text style={styles.totalNumbers}>05</Text>
            <Text style={styles.total}>Registered Activities</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.registeredHeading}>Registered Activities</Text>

        <FlatList
          horizontal
          data={registeredEvents.slice(0, 3)}
          renderItem={renderRegisteredEvents}
        />

        <View style={styles.headingCont}>
          <Text style={styles.speakersHeading}>2024 Speakers</Text>
          <CustomButton
            BtnContstyle={styles.seeAllBtn}
            text="See All"
            textStyle={styles.seeAllTxt}
            onPress={() => props?.navigation?.navigate('SPEAKERS')}
          />
        </View>
        <FlatList
          horizontal
          renderItem={renderSpeakers}
          data={speakers.slice(0, 4)}
        />

        <View style={styles.headingCont}>
          <Text style={styles.speakersHeading}>Upcoming Activities</Text>
          <CustomButton
            BtnContstyle={styles.seeAllBtn}
            text="See All"
            textStyle={styles.seeAllTxt}
            onPress={() => props?.navigation?.navigate('EVENTS')}
          />
        </View>
        <FlatList
          horizontal
          renderItem={renderEvents}
          data={activities.slice(0, 3)}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewStyle: {marginTop: heightPercentageToDP(12)},
  scrollViewCont: {
    paddingHorizontal: widthPercentageToDP(3),
    marginTop: heightPercentageToDP(3),
    paddingBottom: heightPercentageToDP(10),
  },
  topTilesCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topTile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.WHITE_COLOR,
    borderRadius: 16,
    paddingLeft: widthPercentageToDP(3),
    width: widthPercentageToDP(45),
    paddingVertical: 15,
    gap: 9.5,
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
  },
  topBottomTiles: {
    marginTop: heightPercentageToDP(2),
    width: widthPercentageToDP(94),
  },
  totalNumbers: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: Theme.LEAD_COLOR,
  },
  total: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Theme.PANTON_GREY,
    lineHeight: 16,
  },
  registeredHeading: {
    fontSize: 18,
    color: Theme.DARK_SPELL,
    fontFamily: fonts.Medium,
    marginTop: heightPercentageToDP(2.5),
    marginBottom: heightPercentageToDP(1.6),
  },
  eventCard: {
    marginRight: 8,
    backgroundColor: Theme.WHITE_COLOR,
    borderRadius: 16,
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: heightPercentageToDP(1.2),
    marginBottom: heightPercentageToDP(2),
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
  },
  eventName: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: Theme.ROLLER_COASTER_BLUE,
    lineHeight: 19,
  },
  eventDate: {
    fontSize: 12,
    fontFamily: fonts.Bold,
    color: Theme.BLACK_WASH,
    lineHeight: 19,
  },
  eventLocation: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.BLACK_WASH,
    lineHeight: 19,
  },
  unregisterBtn: {
    marginTop: heightPercentageToDP(1.3),
    height: heightPercentageToDP(3),
    borderRadius: 8,
    backgroundColor: Theme.INTOXICATE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(60),
  },
  registerBtn: {backgroundColor: Theme.ROLLER_COASTER_BLUE},
  unregisterTxt: {
    color: Theme.WHITE_COLOR,
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 24,
  },
  headingCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPercentageToDP(2),
  },
  speakersHeading: {
    fontSize: 18,
    color: Theme.DARK_SPELL,
    fontFamily: fonts.Medium,
  },
  seeAllBtn: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP(3),
    backgroundColor: Theme.ROLLER_COASTER_BLUE,
    width: widthPercentageToDP(20),
  },
  seeAllTxt: {
    color: Theme.WHITE_COLOR,
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 24,
  },
  speakerCard: {
    marginRight: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
