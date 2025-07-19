import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/Styles/auth.styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Index() {
    
     const { startSSOFlow } = useSSO();
     const router = useRouter();
     
     const handleGoogleSignIn = async () => {
       try {
         const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_google" });
     
         if (setActive && createdSessionId) {
           setActive({ session: createdSessionId });
           router.replace("/(tabs)");
         }
       } catch (error) {
         console.error("OAuth error:", error);
       }
     };

    return (
        <View style={styles.container}>

          <View style={styles.brandSection}>
              <View style={styles.logoContainer}>
                <Ionicons name="leaf" size={32} color={COLORS.primary}/>
              </View>
              <Text style={styles.appName}>SpotLight</Text>
              <Text style={styles.tagline}>Dont miss anything</Text>

              <View>
               <Image style={styles.illustration} source={require("../../../assets/images/Connected-bro.png")} resizeMode="contain" />
              </View>
                
              <View style={styles.loginSection}>
                <TouchableOpacity
                  style={styles.googleButton}
                  onPress={handleGoogleSignIn}
                  activeOpacity={0.9}
                >
                  <View style={styles.googleIconContainer}>
                    <Ionicons name="logo-google" size={20} color={COLORS.surface} />
                  </View>
                  <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>
              
                <Text style={styles.termsText}>
                  By continuing, you agree to our Terms and Privacy Policy
                </Text>
              </View>     
          </View>
        </View>
    );
}