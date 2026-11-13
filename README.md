# PokéCatch VN — Font và bản dịch tiếng Việt

Hai userscript tùy chỉnh giao diện của [PokéCatch VN](https://pokecatchvn.xyz/) trên trình duyệt của người chơi. Có thể cài riêng từng script.

| Script | Công dụng |
| --- | --- |
| [Cài font tiếng Việt](https://raw.githubusercontent.com/hoksilato/pokecatch-vn-scripts/main/pokecatch-font.user.js) | Dùng Pixel Viet 10, bản bổ sung ký tự tiếng Việt cho Jersey 10. Font nhúng sẵn trong script và áp dụng cho giao diện, nút bấm và popup. |
| [Cài bản dịch bổ sung](https://raw.githubusercontent.com/hoksilato/pokecatch-vn-scripts/main/pokecatch-dich.user.js) | Dịch các nhãn và câu đã đối chiếu trong game bằng từ điển cục bộ. Ví dụ, nhãn hệ Water thành Nước, còn tên chiêu Waterfall được giữ nguyên. |

## Chrome trên PC và MacBook

1. Cài [Tampermonkey](https://www.tampermonkey.net/) cho Chrome. Nếu tiện ích yêu cầu, mở phần **Chi tiết** của Tampermonkey trong trang quản lý tiện ích và bật **Allow User Scripts**.
2. Trong Chrome, mở lần lượt hai link cài ở bảng trên. Chọn **Install** hoặc **Update** trong Tampermonkey.
3. Mở game và tải lại trang. Nếu trước đây đã dán script thủ công, mở **Dashboard** và kiểm tra mỗi chức năng chỉ có một bản đang bật.
4. Để lấy bản mới ngay, mở menu Tampermonkey và chọn **Check for userscript updates**, sau đó tải lại game.

## Safari trên iPhone và iPad

1. Cài [Userscripts trên App Store](https://apps.apple.com/app/userscripts/id1463298887). Mở ứng dụng một lần để xác nhận thư mục lưu script.
2. Trong Safari, mở menu trang cạnh thanh địa chỉ → **Quản lý tiện ích** và bật **Userscripts**.
3. Mở từng link cài ở bảng trên trong **Safari**. Khi thấy mã nguồn, mở menu tiện ích → **Userscripts** → **Install**. Nếu Safari hỏi quyền đọc trang chứa script, cho phép để hoàn tất cài đặt.
4. Truy cập [trang game](https://pokecatchvn.xyz/). Mở **Userscripts ngay trên trang game**, cấp quyền cho tên miền này nếu được hỏi, rồi kiểm tra công tắc tổng và cả hai script đều bật. Tải lại tab.
5. Khi có bản mới, mở **Available Updates** trong Userscripts, áp dụng cập nhật và tải lại game. [Hướng dẫn của Userscripts](https://github.com/quoid/userscripts#ios-ipados)

## Kiểm tra sau khi cài

- **Font:** Trên màn hình mở đầu, nhìn chữ **Ơ** trong **CÁCH CHƠI** và **Ụ** trong **TIẾP TỤC**. Các chữ có dấu phải cùng nét pixel với chữ bên cạnh.
- **Bản dịch:** Vào **Đội hình / Kho PC** và xem nhãn hệ của Pokémon. Ví dụ, Charizard có nhãn **Lửa** và **Bay**.
- Nếu không thấy script trong danh sách trên trang game, kiểm tra lại tên miền, thư mục Userscripts, quyền truy cập của tiện ích và chế độ duyệt web đang dùng. Sau khi đổi quyền hoặc bật script, tải lại tab.

## Phát hành bản mới

Giữ nguyên tên file và URL trên nhánh `main`. Tăng `@version` của script được sửa và sao chép nguyên khối metadata đầu file `.user.js` sang file `.meta.js` tương ứng trong cùng commit. Tiện ích dùng `@updateURL` để kiểm tra phiên bản và `@downloadURL` để tải script.

Font Pixel Viet 10 được chỉnh từ Jersey 10 của The Soft Type Project Authors và phân phối theo [SIL Open Font License 1.1](PixelViet10-OFL.txt).
