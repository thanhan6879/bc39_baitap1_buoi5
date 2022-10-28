// Bài 1 Tính Điểm
document.getElementById("btnTinhTB").onclick = function () {
    var nhapSo1 = document.getElementById("txtdiemThi1").value * 1;
    var nhapSo2 = document.getElementById("txtdiemThi2").value * 1;
    var nhapSo3 = document.getElementById("txtdiemThi3").value * 1;
    var diemChuan = document.getElementById("txtdiemChuan").value * 1;
    var checkBoxKhuVuc = document.getElementsByName("khuvuc");
    var checkBoxDoiTuong = document.getElementsByName("doituong");
    var DiemKhuVuc = 0;
    var diemDoiTuong = 0;

    for (var i = 0; i < checkBoxKhuVuc.length; i++) {
        if (checkBoxKhuVuc[i].checked === true) {
            DiemKhuVuc += checkBoxKhuVuc[i].value * 1;
        }
    }

    for (var i = 0; i < checkBoxDoiTuong.length; i++) {
        if (checkBoxDoiTuong[i].checked === true) {
            diemDoiTuong += checkBoxDoiTuong[i].value * 1;
        }
    }

    var tongSo = (nhapSo1 + nhapSo2 + nhapSo3) / 3 + diemDoiTuong + DiemKhuVuc;

    var tongDiem = "<div class='alert alert-danger' >";
    var ketQua = "<div class='alert alert-danger' >";
    console.log(ketQua);
    tongDiem += "<p>Điểm trung bình: " + tongSo + "</p>";
    console.log(tongDiem);
    console.log(diemChuan);
    if (tongSo > diemChuan) {
        ketQua += "<p>Đạt</>";
    } else {
        ketQua += "<p>Không Đạt</>";
    }
    document.getElementById("footerTrungBinh").innerHTML = tongDiem + ketQua;
};
// Bài 2 Tính tiền điện
function tinhTienDien() {
    var tenChuHo = document.getElementById('tenChuHo').value;
    var soKWdDien = document.getElementById('soKWDien').value;

    const gia50kwDau = 500;
    const gia50kwKe = 650;
    const gia100kwKe = 850;
    const gia150kwKe = 1100;
    const giaConLai = 1300;

    tienDien = tinhTienDienChiTiet(soKWdDien, gia50kwDau, gia50kwKe, gia100kwKe, gia150kwKe, giaConLai);

    document.getElementById('infoDien').innerHTML = "Chủ Hộ: " + tenChuHo + " tiền điện là " + tienDien + "VND";
}

function tinhTienDienChiTiet(soKWDien, gia50kwDau, gia50kwKe, gia100kwKe, gia150kwKe, giaConLai) {
    var tienDien;
    if (soKWDien <= 50) {
        tienDien = soKWDien * gia50kwKe;
    } else if (soKWDien > 50 && soKWDien <= 100) {
        tienDien = gia50kwDau * 50 + (soKWDien - 50) * gia50kwKe;
    } else if (soKWDien > 100 && soKWDien <= 200) {
        tienDien = 50 * (gia50kwKe + gia50kwDau) + (soKWDien - 100) * gia100kwKe
    } else if (soKWDien > 200 && soKWDien <= 350) {
        tienDien = 50 * (gia50kwKe + gia50kwDau) + 100 * gia100kwKe + (soKWDien - 200) * gia150kwKe;
    } else {
        tienDien = 50 * (gia50kwKe + gia50kwDau) + 100 * gia100kwKe + 150 * gia150kwKe + (soKWDien - 350) * giaConLai;
    }
    return tienDien;
}