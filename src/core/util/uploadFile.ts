import ReactS3Client from 'react-aws-s3-typescript'
import { getS3Config } from '../constant/s3Config'

export const guid = () => {
  function _s4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + _s4() + _s4()
}

export const uploadFiles = async (file: any) => {
  const config = await getS3Config()
  const s3 = new ReactS3Client(config)

  try {
    const res = await s3.uploadFile(file, guid())
    return res

    /*
     * {
     *   Response: {
     *     bucket: "bucket-name",
     *     key: "directory-name/filename-to-be-uploaded",
     *     location: "https:/your-aws-s3-bucket-url/directory-name/filename-to-be-uploaded"
     *   }
     * }
     */
  } catch (exception) {
    console.log(exception)
  }
}
