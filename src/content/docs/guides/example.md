---
title: Hướng dẫn cài ROM
description: Hướng dẫn cài ROM Factory cho Pixel 3a (Bootloader đã Unlock).
---

> Áp dụng cho **Google Pixel 3a (sargo)**  
> ⚠️ Yêu cầu **bootloader đã unlock sẵn**  
> ⚠️ Toàn bộ dữ liệu trên máy **sẽ bị xoá sạch**

---

## 1. Chuẩn bị

### 1.1 Thiết bị & phần mềm
- Google Pixel 3a
- Cáp USB chất lượng tốt
- Máy tính Windows / Linux / macOS
- Pin điện thoại ≥ 50%

### 1.2 Cài đặt ADB & Fastboot

#### Windows
- Tải Android Platform Tools
- Giải nén, ví dụ:
  ```
  C:\platform-tools
  ```
- Mở Command Prompt / PowerShell tại thư mục này

#### Linux / macOS
```bash
sudo apt install android-tools-adb android-tools-fastboot
# hoặc
brew install android-platform-tools
```

Kiểm tra:
```bash
adb version
fastboot version
```

---

## 2. Tải ROM Factory Pixel 3a

### 2.1 Trang tải chính thức
- https://developers.google.com/android/images

### 2.2 Chọn đúng thiết bị
- Device: Pixel 3a
- Codename: sargo

### 2.3 File tải về
- Định dạng `.zip`
- Ví dụ:
```
sargo-tt2a.230505.002-factory-xxxxxxxx.zip
```

---

## 3. Giải nén ROM Factory

Sau khi giải nén sẽ có cấu trúc:

```text
sargo-xxx/
├─ flash-all.bat        (Windows)
├─ flash-all.sh         (Linux/macOS)
├─ image-sargo-xxx.zip
├─ bootloader-sargo-xxx.img
├─ radio-sargo-xxx.img
```

---

## 4. Đưa Pixel 3a vào Fastboot Mode

### Cách 1: Trực tiếp trên máy
1. Tắt nguồn
2. Giữ Volume (-) + Power
3. Thả khi vào màn hình Fastboot

### Cách 2: Qua ADB
```bash
adb reboot bootloader
```

Kiểm tra kết nối:
```bash
fastboot devices
```

Nếu thấy serial → OK

---

## 5. Flash ROM Factory (Cách nhanh nhất)

### 5.1 Windows
```bat
flash-all.bat
```

### 5.2 Linux / macOS
```bash
chmod +x flash-all.sh
./flash-all.sh
```

⏳ Thời gian: 5–10 phút  
⚠️ Không rút cáp, không tắt máy

---

## 6. Flash thủ công (Khuyến nghị cho dev)

### 6.1 Flash bootloader
```bash
fastboot flash bootloader bootloader-sargo-xxx.img
fastboot reboot-bootloader
```

### 6.2 Flash radio (baseband)
```bash
fastboot flash radio radio-sargo-xxx.img
fastboot reboot-bootloader
```

### 6.3 Flash system image
```bash
fastboot update image-sargo-xxx.zip
```

---

## 7. Khởi động lần đầu

- Máy tự reboot
- Lần boot đầu 5–10 phút
- Thấy màn hình setup Android là hoàn tất

---

## 8. (Tuỳ chọn) Lock lại Bootloader

> ⚠️ Chỉ lock khi dùng ROM stock gốc

```bash
fastboot flashing lock
```

Xác nhận trên màn hình điện thoại

---

## 9. Lỗi thường gặp

### fastboot devices không hiện
- Cài driver USB (Windows)
- Đổi cáp hoặc cổng USB
- Dùng cổng USB phía sau mainboard

### flash-all.bat bị đứng
- Chạy CMD với quyền Administrator
- Không để thư mục có dấu hoặc ký tự Unicode

### Bootloop sau khi flash
- Vào recovery → Factory Reset
- Flash lại full ROM

---

## 10. Ghi chú quan trọng

- Pixel 3a sử dụng A/B partition
- Không flash ROM Pixel 3 / 3 XL
- ROM Factory khác OTA

---

## 11. Checklist

```text
✔ Bootloader unlocked
✔ Đúng ROM (sargo)
✔ fastboot nhận device
✔ Flash không lỗi
✔ Boot vào setup Android
```
