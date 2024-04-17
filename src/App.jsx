import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [id, idSet] = useState("")
  const [user, userSet] = useState({})
  // const [text, textSet] = useState("")

  const selectButton = async () =>{
    try{
      // const response = await fetch(`http://localhost:3000/userdata?id=${id}`);
      // const response = await fetch(`http://localhost:8055/items/student_table/${id}`, {
      //   headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh'}
      // });
      // const response = await fetch(`https://psd-directus.dev.frp.slsx.io/items/student_table/${id}`, {
      //   headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh'}
      // });
      const response = await fetch(`https://oryx-eternal-oddly.ngrok-free.app/items/student_table/${id}`, {
        headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh',
        "ngrok-skip-browser-warning": "69420"}
      });
      console.log(response)
      const data = await response.json();
      console.log(data)
      userSet(data)
      // console.log(data.data)

      // const response = await fetch(`http://localhost:3000/userdata?id=${id}`);
      // const response2 = await fetch(`http://localhost:8055/items/test_table/1`, {
      //   headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh'}
      // });
      // const response = await fetch(`https://psd-directus.dev.frp.slsx.io/items/student_table/${id}`, {
      //   headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh'}
      // });
      // const response2 = await fetch(`https://oryx-eternal-oddly.ngrok-free.app/items/test_table/1`, {
        // headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh'}
      // });
      // const data2 = await response2.json();
      // userSet(data)
      // console.log(data2.data)

      // const response = await fetch(`http://localhost:3000/userdata?id=${id}`);
      // const response3 = await fetch(`http://localhost:8055/items/testing/1`, {
      //   headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh'}
      // });
      // const response = await fetch(`https://psd-directus.dev.frp.slsx.io/items/student_table/${id}`, {
      //   headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh'}
      // });
      // const response3 = await fetch(`https://oryx-eternal-oddly.ngrok-free.app/items/testing/1`, {
        // headers: {'Authorization': 'Bearer 5_5JLywfBdhmM5OWd-JVqiGEdIF2jEEh'}
      // });
      // const data3 = await response3.json();
      // textSet(data3)
      // console.log(data3.data.content_field)
    }
    catch(err){
      console.log(user)
      console.log(err)
    }
  }

  const handleIdSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <>
        <form className='form-input' onSubmit={handleIdSubmit}>
          <label className='gap-form' htmlFor="">ID</label>
          {/* <div className="gap-form">tes</div> */}
          <input type="text" name="" id="" value={id} onChange={(e) => idSet(e.target.value)}/>
          <button className='gap-form' onClick={selectButton}>Search student</button>
        </form>



        <div>
          {/* {user.data&&<h1>Name: {user.data.nama_penuh}</h1>} */}
          {user.data&&          
            <div className="profile-image-container">
              <img className='profile-image' src={"https://oryx-eternal-oddly.ngrok-free.app/assets/" + user.data.gambar_pendaftar} alt="test" />
            </div>
          }
          <table>
            <tr>
              <th>Fields</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>NO DIRI</td>
              <td>{user.data&&user.data.no_diri}</td>
            </tr>
            <tr>
              <td>NO DI KERTAS BANCI</td>
              <td>{user.data&&user.data.no_di_kertas_banci}</td>
            </tr>
            <tr>
              <td>TARIKH DAFTAR</td>
              <td>{user.data&&user.data.tarikh_daftar}</td>
            </tr>
            <tr>
              <td>RESIT BAYARAN</td>
              <td>{user.data&&user.data.tarikh_daftar}</td>
            </tr>                       
            <tr>
              <td>NAMA</td>
              <td>{user.data&&user.data.nama_penuh}</td>
            </tr>            
            <tr>
              <td>Nama Penuh Jawi</td>
              <td>{user.data&&user.data.nama_penuh_jawi}</td>
            </tr>            
            <tr>
              <td>NO K/P</td>
              <td>{user.data&&user.data.no_kad_pengenalan}</td>
            </tr>            
            <tr>
              <td>TEMPAT LAHIR</td>
              <td>{user.data&&user.data.tempat_lahir}</td>
            </tr>            
            <tr>
              <td>ALAMAT</td>
              <td>{user.data&&user.data.alamat_penuh}</td>
            </tr>            
            <tr>
              <td>POSKOD</td>
              <td>{user.data&&user.data.poskod_penuh}</td>
            </tr>            
            <tr>
              <td>BANDAR</td>
              <td>{user.data&&user.data.bandar_penuh}</td>
            </tr>            
            <tr>
              <td>NEGERI</td>
              <td>{user.data&&user.data.negeri_penuh}</td>
            </tr>            
            <tr>
              <td>NAMA BAPA</td>
              <td>{user.data&&user.data.nama_penuh_bapa}</td>
            </tr>            
            <tr>
              <td>NO K/P BAPA</td>
              <td>{user.data&&user.data.nombor_kad_pengenalan_bapa}</td>
            </tr>            
            <tr>
              <td>NO TELEFON</td>
              <td>{user.data&&user.data.nombor_telefon_bapa}</td>
            </tr>            
            <tr>
              <td>PEKERJAAN</td>
              <td>{user.data&&user.data.pekerjaan_bapa}</td>
            </tr>            
            <tr>
              <td>PENDAPATAN</td>
              <td>{user.data&&user.data.pendapatan_bapa}</td>
            </tr>            
            <tr>
              <td>NAMA IBU</td>
              <td>{user.data&&user.data.nama_penuh_ibu}</td>
            </tr>            
            <tr>
              <td>NO K/P IBU</td>
              <td>{user.data&&user.data.nombor_kad_pengenalan_ibu}</td>
            </tr>            
            <tr>
              <td>NO TELEFON</td>
              <td>{user.data&&user.data.nombor_telefon_ibu}</td>
            </tr>            
            <tr>
              <td>PEKERJAAN</td>
              <td>{user.data&&user.data.pekerjaan_ibu}</td>
            </tr>            
            <tr>
              <td>PENDAPATAN</td>
              <td>{user.data&&user.data.pendapatan_ibu}</td>
            </tr>            
            <tr>
              <td>BIL TANGGUNGAN</td>
              <td>{user.data&&user.data.bilangan_tanggungan}</td>
            </tr>            
            <tr>
              <td>KOMEN</td>
              <td>{user.data&&user.data.comment}</td>
            </tr>            
          </table>
        </div>
    </>
  )
}

export default App
