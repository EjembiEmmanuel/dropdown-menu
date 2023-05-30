# oche-dropdown-menu

This is a JavaScript package that implements basic dropdown menu functionalities
like revealing and hiding dropdown menus and also trigerring dropdown animations

## Usage

### HTML

```
<div class="dropdown">
    <button class="dropdown-toggle" type="button" data-toggle="menu1">
        Dropdown menu1
    </button>
    <div class="dropdown-menu menu1" data-menu="menu1">
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 1</a>
    </div>
</div>

<!-- Copy and paste the script tags into your HTML file if you're not using a module bundler like webpack -->
<script src="https://unpkg.com/oche-dropdown-menu@1.0.4/dist/index.js"></script>
<script src="./index.js"></script>
```

### CSS (Optional)

```
@keyframes dropDownAnimation {
0% {
transform: scaleY(0);
}
80% {
transform: scaleY(1.1)
}
100% {
transform: scaleY(1)
}

}

.animation {
animation: dropDownAnimation 300ms ease-in-out forwards;
transform-origin: top center;
}

.dropdown {
display: inline-block;
position: relative;
}

.dropdown-toggle {
background-color: rgb(19, 50, 54);
color: white;
font-size: 16px;
font-weight: bold;
font-family: monospace;
padding: 10px;
border-radius: 5px;
}

.dropdown-menu {
display: none;
position: absolute;
min-width: 160px;
border: 1px solid rgba(19, 50, 54, 0.3);
border-radius: 5px;
z-index: 1;
}

.dropdown-item {
display: block;
text-decoration: none;
font-family: monospace;
font-size: 14px;
color: black;
padding: 12px 16px;
}

.dropdown-item:hover {
background-color: rgba(19, 50, 54, 0.3);
}
```

### JavaScript

#### Usage on the web

```
const dropDownBtns = document.querySelectorAll(".dropdown-toggle");

dropDownBtns.forEach(function (dropDownBtn) {
  dropDownBtn.onclick = function (event) {
    window.dropdown.showDropDownMenu(event.target, "animation");
  };
});
```

#### Usage in a Node.js development enviroment with a module bundler like webpack

```
const dropdown = require("oche-dropdown-menu")

const dropDownBtns = document.querySelectorAll(".dropdown-toggle");

dropDownBtns.forEach(function (dropDownBtn) {
    dropDownBtn.onclick = function (event) {
        dropdown.showDropDownMenu(event.target, "animation");
    };
});
```
