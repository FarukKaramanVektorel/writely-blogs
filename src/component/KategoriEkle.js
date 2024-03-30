import React, { useState } from 'react';
import { CATEGORY } from '../utils/api';

const KategoriEkle = () => {
    const [kategoriAdi, setKategoriAdi] = useState('');
    const [durum, setDurum] = useState(1); // Varsayılan olarak "Aktif"
    const [resim, setResim] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('ad', kategoriAdi);
        formData.append('durum', durum);

        // Dosyadan bir Blob nesnesi oluşturun
        const fileBlob = new Blob([resim], { type: resim.type });
        formData.append('resim', fileBlob, resim.name);

        CATEGORY.ADD_CATEGORY(formData)
            .then((response) => {
                console.log('Kategori başarıyla eklendi:', response.data);
                // Başka bir işlem yapabilirsiniz, örneğin kullanıcıya başarı mesajı gösterebilirsiniz.
            })
            .catch((error) => {
                console.error('Kategori eklenirken bir hata oluştu:', error);
                // Hata durumunda kullanıcıya hata mesajı gösterebilirsiniz.
            });
    };

    return (
        <div>
            <h2>Kategori Ekle</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Kategori Adı:
                    <input
                        type="text"
                        value={kategoriAdi}
                        onChange={(e) => setKategoriAdi(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Durum:
                    <select value={durum} onChange={(e) => setDurum(e.target.value)}>
                        <option value={1}>Aktif</option>
                        <option value={0}>Pasif</option>
                    </select>
                </label>
                <label>
                    Resim:
                    <input
                        type="file"
                        onChange={(e) => setResim(e.target.files[0])}
                        accept="image/*"
                        required
                    />
                </label>
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
};

export default KategoriEkle;
