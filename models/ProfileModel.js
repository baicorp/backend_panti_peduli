import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Profile = db.define('profile',{
    nama_panti: DataTypes.STRING,
    notelp_panti: DataTypes.STRING,
    nama_pengurus: DataTypes.STRING,
    nama_pemilik: DataTypes.STRING,
    notelp_pemilik: DataTypes.STRING,
    deskripsi_panti: DataTypes.STRING,
    alamat_panti: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    program_panti: DataTypes.STRING,
    deskripsi_program: DataTypes.STRING,
    kebutuhan_panti: DataTypes.STRING,
    deskripsi_kebutuhan: DataTypes.STRING,
    jumlah_pengurus: DataTypes.STRING,
    jumlah_anaklaki: DataTypes.STRING,
    jumlah_anakpr: DataTypes.STRING,
    jumlah_anak: DataTypes.STRING,
    image: DataTypes.STRING,
},
{
    freezeTableName: true
});

export default Profile;

(async()=>{
    await db.sync();
})();