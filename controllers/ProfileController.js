import Profile from "../models/ProfileModel.js";

export const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findAll();
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProfileById = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await Profile.findByPk(id);
        if (profile) {
            res.status(200).json(Profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const saveProfile = async (req, res) => {
    const {  nama_panti , 
        notelp_panti , 
        nama_pengurus ,  
        nama_pemilik , 
        notelp_pemilik ,  
        deskripsi_panti , 
        alamat_panti , 
        provinsi , 
        kabupaten , 
        kecamatan , 
        program_panti , 
        deskripsi_program , 
        kebutuhan_panti , 
        deskripsi_kebutuhan , 
        jumlah_pengurus , 
        jumlah_anaklaki , 
        jumlah_anakpr , 
        jumlah_anak  } = req.body;

    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: 'No files were uploaded.' });
        }

        const { image } = req.files;
        const imageName = `${Date.now()}_${image.name}`;
        image.mv(`./public/images/profile/${imageName}`, async (error) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            const newProfile = await Profile.create({
                nama_panti , 
                notelp_panti , 
                nama_pengurus ,  
                nama_pemilik , 
                notelp_pemilik ,  
                deskripsi_panti , 
                alamat_panti , 
                provinsi , 
                kabupaten , 
                kecamatan , 
                program_panti , 
                deskripsi_program , 
                kebutuhan_panti , 
                deskripsi_kebutuhan , 
                jumlah_pengurus , 
                jumlah_anaklaki , 
                jumlah_anakpr , 
                jumlah_anak , 
                image: imageName,
            });

            res.status(201).json(newProfile);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const {  nama_panti , 
        notelp_panti , 
        nama_pengurus ,  
        nama_pemilik , 
        notelp_pemilik ,  
        deskripsi_panti , 
        alamat_panti , 
        provinsi , 
        kabupaten , 
        kecamatan , 
        program_panti , 
        deskripsi_program , 
        kebutuhan_panti , 
        deskripsi_kebutuhan , 
        jumlah_pengurus , 
        jumlah_anaklaki , 
        jumlah_anakpr , 
        jumlah_anak , 
        image  } = req.body;
    try {
        const profile = await Profile.findByPk(id);
        if (profile) {
            await Profile.update({
                nama_panti , 
        notelp_panti , 
        nama_pengurus ,  
        nama_pemilik , 
        notelp_pemilik ,  
        deskripsi_panti , 
        alamat_panti , 
        provinsi , 
        kabupaten , 
        kecamatan , 
        program_panti , 
        deskripsi_program , 
        kebutuhan_panti , 
        deskripsi_kebutuhan , 
        jumlah_pengurus , 
        jumlah_anaklaki , 
        jumlah_anakpr , 
        jumlah_anak , 
        image
                
            });
            res.status(200).json({ message: "Profile updated successfully" });
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await Profile.findByPk(id);
        if (profile) {
            await Profile.destroy();
            res.status(200).json({ message: "Profile deleted successfully" });
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
