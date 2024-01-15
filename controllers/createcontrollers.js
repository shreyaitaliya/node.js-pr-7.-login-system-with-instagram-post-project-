const createmodel = require('../models/createmodel');
const fs = require('fs');

const createUser = async (req, res) => {
    try {
        let imagename = '';
        if (req.file) {
            imagename = req.file.path;
        }

        let userdata = await createmodel.create({
            description: req.body.description,
            image: imagename,
        })
        return res.redirect('/dashbord');
    } catch (error) {
        console.log(error);
        return false;
    }
}

const dashbord = async (req, res) => {
    try {
        let alldata = await createmodel.find({});
        return res.render('dashbord', {
            record: alldata
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const logout = (req, res) => {
    req.logout((error) => {
        if (error) {
            console.log(error);
            return false;
        }
        return res.redirect('/');
    })
}

const delteRecord = async (req, res) => {
    try {
        let removefile = await createmodel.findById(req.query.delid);
        fs.unlinkSync(removefile.image);

        let deleteRecord = await createmodel.findByIdAndDelete(req.query.delid);
        return res.redirect('/dashbord');

    } catch (error) {
        console.log(error);
        return false;
    }
}


const editRecord = async (req, res) => {
    try {
        let editimage = await createmodel.findById(req.query.editId);
        return res.render('edit', {
            single: editimage
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const updateUser = async (req, res) => {
    try {
        if (req.file) {
            let imageupdate = await createmodel.findById(req.body.editid);
            fs.unlinkSync(imageupdate.image);

            let updateRecord = await createmodel.findByIdAndUpdate(req.body.editid, {
                description: req.body.description,
                image: req.file.path,
            })
            return res.redirect('/dashbord');
        }
        else {
            let record = await createmodel.findById(req.body.editid);
            let updaterecord = await createmodel.findByIdAndUpdate(req.body.editid, {
                description: req.body.description,
                image: record.image,
            })
            return res.redirect('/dashbord');
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

const profile = (req, res) => {
    return res.render('profile');
}

module.exports = ({
    createUser, dashbord, logout, delteRecord, editRecord, updateUser, profile
})