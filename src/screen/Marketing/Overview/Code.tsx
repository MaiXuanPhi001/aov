import React, { useState } from 'react'
import Box from '@commom/Box'
import { useAppSelector } from '@hooks/index';
import { profileSelector } from '@selector/userSelector';
import contants from '@util/contants';
import { Profile } from '@interface/user';
import QRCode from 'react-native-qrcode-svg';
import { Alert, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '@theme/index';
import Clipboard from '@react-native-clipboard/clipboard';
import RNFetchBlob from 'rn-fetch-blob';

const Code = ({ toastTopRef }: any) => {
  const profile: Profile = useAppSelector<any>(profileSelector)
  const [qrCodeRef, setQrCodeRef] = useState<any>(null)

  const URL = contants.HOSTING + '/signup?ref=' + profile.referral

  const handleCopyReferral = () => {
    Clipboard.setString(profile.referral)
    toastTopRef?.current?.slideDown('Copy thành công', true)
  }

  const handleCopyLink = () => {
    Clipboard.setString(URL)
    toastTopRef?.current?.slideDown('Copy thành công', true)
  }

  const handleDownloadQRcode = async () => {
    if (Platform.OS === 'ios') {
      downloadQRCode()
    } else {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadQRCode()
        }
        else {
          Alert.alert("Bạn đã không cho phép quyền");
        }
      } catch (error: any) {
        Alert.alert(error)
      }
    }
  }

  const downloadQRCode = () => {
    try {
      qrCodeRef.toDataURL((data: any) => {
        const date = new Date()
        let path = ''
        if (Platform.OS === 'android') {
          path = RNFetchBlob.fs.dirs.DownloadDir +
            `/${URL
              .slice(0, 10)
              .replace('https', '')
              .replace('://', date.getTime().toString())}.png`
        } else if (Platform.OS === 'ios') {
          path = RNFetchBlob.fs.dirs.DocumentDir +
            `/${URL
              .slice(0, 10)
              .replace('https', '')
              .replace('://', date.getTime().toString())}.png`
        } else {
          return
        }

        RNFetchBlob.fs.writeFile(path, data, 'base64')
          .then(() => Alert.alert('Download mã QR code thành công, vui lòng kiểm tra tệp của bạn'))
          .catch(err => Alert.alert(err))
      })
    } catch (error: any) {
      Alert.alert(error)
    }
  }

  return (
    <Box
      row
      paddingHorizontal={10}
      paddingVertical={20}
      paddingLeft={30}
      backgroundColor={'white'}
    >
      <Box
        width={'40%'}
      >
        <QRCode
          value={URL}
          size={120}
        />
        <Box
          absolute
          opacity={0}
        >
          <QRCode
            value={URL}
            size={120}
            color={'red'}
            backgroundColor={'white'}
            getRef={(ref) => setQrCodeRef(ref)}
          />
        </Box>
      </Box>

      <Box
        width={'60%'}
        paddingHorizontal={15}
      >
        <TouchableOpacity
          onPress={handleDownloadQRcode}
          style={styles.button}
        >
          <Text style={styles.textButton}>Lưu QR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCopyReferral}
          style={styles.button}
        >
          <Text style={styles.textButton}>Sao chép mã giới thiệu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCopyLink}
          style={styles.button}
        >
          <Text style={styles.textButton}>Sao chép đường dẫn</Text>
        </TouchableOpacity>
      </Box>
    </Box>
  )
}

export default Code

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.textRed,
    height: 35,
    marginVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    maxWidth: 200,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold'
  }
})