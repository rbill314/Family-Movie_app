body {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  width:100%;
  overflow: hidden;
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: center;
}

h1 {
  color: rgb(172, 190, 189);
  margin-top: -25%
}

h2 {
  color: rgb(172, 190, 189);
  margin-top: -8%
}

.night {
  position: relative;
  width: 100vh;
  height: 100%;
  transform: rotateZ(45deg);
}
.shooting_star {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
  animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}
.shooting_star::before, .shooting_star::after {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  animation: shining 3000ms ease-in-out infinite;
}
.shooting_star::after {
  transform: translateX(50%) rotateZ(-45deg);
}
.shooting_star:nth-child(1) {
  top: calc(50% - 114px);
  left: calc(50% - 70px);
  animation-delay: 3550ms;
}
.shooting_star:nth-child(1)::before, .shooting_star::after:nth-child(1), .shooting_star:nth-child(1)::after {
  animation-delay: 3550ms;
}
.shooting_star:nth-child(2) {
  top: calc(50% - 14px);
  left: calc(50% - 151px);
  animation-delay: 6295ms;
}
.shooting_star:nth-child(2)::before, .shooting_star::after:nth-child(2), .shooting_star:nth-child(2)::after {
  animation-delay: 6295ms;
}
.shooting_star:nth-child(3) {
  top: calc(50% - 154px);
  left: calc(50% - 86px);
  animation-delay: 5435ms;
}
.shooting_star:nth-child(3)::before, .shooting_star::after:nth-child(3), .shooting_star:nth-child(3)::after {
  animation-delay: 5435ms;
}
.shooting_star:nth-child(4) {
  top: calc(50% - 153px);
  left: calc(50% - 163px);
  animation-delay: 6570ms;
}
.shooting_star:nth-child(4)::before, .shooting_star::after:nth-child(4), .shooting_star:nth-child(4)::after {
  animation-delay: 6570ms;
}
.shooting_star:nth-child(5) {
  top: calc(50% - -48px);
  left: calc(50% - 298px);
  animation-delay: 7616ms;
}
.shooting_star:nth-child(5)::before, .shooting_star::after:nth-child(5), .shooting_star:nth-child(5)::after {
  animation-delay: 7616ms;
}
.shooting_star:nth-child(6) {
  top: calc(50% - 17px);
  left: calc(50% - 72px);
  animation-delay: 3856ms;
}
.shooting_star:nth-child(6)::before, .shooting_star::after:nth-child(6), .shooting_star:nth-child(6)::after {
  animation-delay: 3856ms;
}
.shooting_star:nth-child(7) {
  top: calc(50% - 99px);
  left: calc(50% - 13px);
  animation-delay: 4124ms;
}
.shooting_star:nth-child(7)::before, .shooting_star::after:nth-child(7), .shooting_star:nth-child(7)::after {
  animation-delay: 4124ms;
}
.shooting_star:nth-child(8) {
  top: calc(50% - -2px);
  left: calc(50% - 219px);
  animation-delay: 1978ms;
}
.shooting_star:nth-child(8)::before, .shooting_star::after:nth-child(8), .shooting_star:nth-child(8)::after {
  animation-delay: 1978ms;
}
.shooting_star:nth-child(9) {
  top: calc(50% - 183px);
  left: calc(50% - 220px);
  animation-delay: 1585ms;
}
.shooting_star:nth-child(9)::before, .shooting_star::after:nth-child(9), .shooting_star:nth-child(9)::after {
  animation-delay: 1585ms;
}
.shooting_star:nth-child(10) {
  top: calc(50% - 161px);
  left: calc(50% - 123px);
  animation-delay: 9269ms;
}
.shooting_star:nth-child(10)::before, .shooting_star::after:nth-child(10), .shooting_star:nth-child(10)::after {
  animation-delay: 9269ms;
}
.shooting_star:nth-child(11) {
  top: calc(50% - 12px);
  left: calc(50% - 136px);
  animation-delay: 549ms;
}
.shooting_star:nth-child(11)::before, .shooting_star::after:nth-child(11), .shooting_star:nth-child(11)::after {
  animation-delay: 549ms;
}
.shooting_star:nth-child(12) {
  top: calc(50% - -168px);
  left: calc(50% - 222px);
  animation-delay: 531ms;
}
.shooting_star:nth-child(12)::before, .shooting_star::after:nth-child(12), .shooting_star:nth-child(12)::after {
  animation-delay: 531ms;
}
.shooting_star:nth-child(13) {
  top: calc(50% - 58px);
  left: calc(50% - 269px);
  animation-delay: 5523ms;
}
.shooting_star:nth-child(13)::before, .shooting_star::after:nth-child(13), .shooting_star:nth-child(13)::after {
  animation-delay: 5523ms;
}
.shooting_star:nth-child(14) {
  top: calc(50% - 122px);
  left: calc(50% - 243px);
  animation-delay: 6175ms;
}
.shooting_star:nth-child(14)::before, .shooting_star::after:nth-child(14), .shooting_star:nth-child(14)::after {
  animation-delay: 6175ms;
}
.shooting_star:nth-child(15) {
  top: calc(50% - 74px);
  left: calc(50% - 101px);
  animation-delay: 6073ms;
}
.shooting_star:nth-child(15)::before, .shooting_star::after:nth-child(15), .shooting_star:nth-child(15)::after {
  animation-delay: 6073ms;
}
.shooting_star:nth-child(16) {
  top: calc(50% - -127px);
  left: calc(50% - 128px);
  animation-delay: 1613ms;
}
.shooting_star:nth-child(16)::before, .shooting_star::after:nth-child(16), .shooting_star:nth-child(16)::after {
  animation-delay: 1613ms;
}
.shooting_star:nth-child(17) {
  top: calc(50% - -34px);
  left: calc(50% - 28px);
  animation-delay: 258ms;
}
.shooting_star:nth-child(17)::before, .shooting_star::after:nth-child(17), .shooting_star:nth-child(17)::after {
  animation-delay: 258ms;
}
.shooting_star:nth-child(18) {
  top: calc(50% - 40px);
  left: calc(50% - 164px);
  animation-delay: 5372ms;
}
.shooting_star:nth-child(18)::before, .shooting_star::after:nth-child(18), .shooting_star:nth-child(18)::after {
  animation-delay: 5372ms;
}
.shooting_star:nth-child(19) {
  top: calc(50% - -93px);
  left: calc(50% - 137px);
  animation-delay: 1075ms;
}
.shooting_star:nth-child(19)::before, .shooting_star::after:nth-child(19), .shooting_star:nth-child(19)::after {
  animation-delay: 1075ms;
}
.shooting_star:nth-child(20) {
  top: calc(50% - -198px);
  left: calc(50% - 242px);
  animation-delay: 5861ms;
}
.shooting_star:nth-child(20)::before, .shooting_star::after:nth-child(20), .shooting_star:nth-child(20)::after {
  animation-delay: 5861ms;
}
@keyframes tail {
  0% {
    width: 0;
 }
  30% {
    width: 100px;
 }
  100% {
    width: 0;
 }
}
@keyframes shining {
  0% {
    width: 0;
 }
  50% {
    width: 30px;
 }
  100% {
    width: 0;
 }
}
@keyframes shooting {
  0% {
    transform: translateX(0);
 }
  100% {
    transform: translateX(300px);
 }
}
@keyframes sky {
  0% {
    transform: rotate(45deg);
 }
  100% {
    transform: rotate(405deg);
 }
}

form {
  padding: 5px;
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  height: auto;
  border-radius: 5px;
  text-align: center;
  display: inline-block;
  width: 100%;
  max-width: 340px;
  border-radius: 5px;
}

.submit {
  text-align: center;
}

input {
  margin-bottom: 5px;
  padding: 3px;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-size: 16px;
}

input[type="submit"] {
  font-size: 16px;
  border-radius: 3px;
  background-color: #E4F1FE;
  border: 1px solid grey;
  box-shadow: 2px 2px #999;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #FFFEC4;
}

.border {
  border-style: solid;
  border-width: 1px;
  margin: 10px;
}

#movieui {
  max-width: 450px;
  height: 100%;
}

label {
  display: block;
  font-weight: bold;
}
