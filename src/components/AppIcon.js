import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Foundation from '@expo/vector-icons/Foundation';

export const Icons = {
    MaterialCommunityIcons: 'MaterialCommunityIcons',
    MaterialIcons: 'MaterialIcons',
    Ionicons: 'Ionicons',
    Feather: 'Feather',
    FontAwesome5: 'FontAwesome5',
    FontAwesome: 'FontAwesome',
    AntDesign: 'AntDesign',
    Entypo: 'Entypo',
    SimpleLineIcons: 'SimpleLineIcons',
    Octicons: 'Octicons',
    Foundation: 'Foundation',
}

const AppIcon = (props) => {

    const fontSize = 24;
    return (
        <>
            {props.type === Icons.MaterialCommunityIcons &&
                <MaterialCommunityIcons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Ionicons &&
                <Ionicons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Feather &&
                <Feather name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.FontAwesome5 &&
                <FontAwesome5 name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.FontAwesome &&
                <FontAwesome name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.AntDesign &&
                <AntDesign name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Entypo &&
                <Entypo name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.MaterialIcons &&
                <MaterialIcons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.SimpleLineIcons &&
                <SimpleLineIcons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Octicons &&
                <Octicons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Foundation &&
                <Foundation name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
        </>
    )
}

export default AppIcon