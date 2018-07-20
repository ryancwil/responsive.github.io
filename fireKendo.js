$(document).ready(function() {
    // create Calendar from div HTML element
    $("#calendar").kendoCalendar();

    // create DatePicker from input HTML element
    $("#datepicker").kendoDatePicker();

    $("#monthpicker").kendoDatePicker({
        // defines the start view
        start: "year",

        // defines when the calendar should return date
        depth: "year",

        // display month and year in the input
        format: "MMMM yyyy",

        // specifies that DateInput is used for masking the input element
        dateInput: true
    });
    

    $(document).ready(function () {
        $("#dateinput").kendoDateInput();
    });
    
    
    $(document).ready(function () {
        // create DateTimePicker from input HTML element
        $("#datetimepicker").kendoDateTimePicker({
            value: new Date(),
            dateInput: true
        });
    });
    

    /*$(document).ready(function() {
        var data = [
            { text: "Black", value: "1" },
            { text: "Orange", value: "2" },
            { text: "Grey", value: "3" }
        ];

        // create DropDownList from input HTML element
        $("#color").kendoDropDownList({
            dataTextField: "text",
            dataValueField: "value",
            dataSource: data,
            index: 0,
            change: onChange
        });

        // create DropDownList from select HTML element
        $("#size").kendoDropDownList();

        var color = $("#color").data("kendoDropDownList");

        color.select(0);
        var size = $("#size").data("kendoDropDownList");

        function onChange() {
            var value = $("#color").val();
            $("#cap")
                .toggleClass("black-cap", value == 1)
                .toggleClass("orange-cap", value == 2)
                .toggleClass("grey-cap", value == 3);
        };

        $("#get").click(function() {
            alert('Thank you! Your Choice is:\n\nColor ID: '+color.value()+' and Size: '+size.value());
        });
    });*/

    $(document).ready(function () {
        // create Editor from textarea HTML element with default set of tools
        $("#editor").kendoEditor({
            resizable: {
                content: true,
                toolbar: true
            }
        });
    });

    $(document).ready(function () {
        $("#optional").kendoListBox({
            connectWith: "selected",
            toolbar: {
                tools: ["moveUp", "moveDown", "transferTo", "transferFrom", "transferAllTo", "transferAllFrom", "remove"]
            }
        });

        $("#selected").kendoListBox();
    });

    $(document).ready(function() {
        $("#customers").kendoMultiSelect({
            placeholder: "Select customers...",
            dataTextField: "ContactName",
            dataValueField: "CustomerID",
            height: 400,
            dataSource: {
                type: "odata",
                transport: {
                    read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                },
                group: { field: "Country" }
            }
        });
    });

    $(document).ready(function() {
        // create NumericTextBox from input HTML element
        $("#numeric").kendoNumericTextBox();

        // create Curerncy NumericTextBox from input HTML element
        $("#currency").kendoNumericTextBox({
            format: "c",
            decimals: 3
        });

        // create Percentage NumericTextBox from input HTML element
        $("#percentage").kendoNumericTextBox({
            format: "p0",
            min: 0,
            max: 0.1,
            step: 0.01
        });

        // create NumericTextBox from input HTML element using custom format
        $("#custom").kendoNumericTextBox({
            format: "#.00 kg"
        });
    });    

    $(document).ready(function() {
        $("#panelbar").kendoPanelBar({
            expandMode: "single"
        });
    });

    $(document).ready(function() {
        $("#toolbar").kendoToolBar({
            items: [
                { type: "button", text: "Button" },
                { type: "button", text: "Toggle Button", togglable: true },
                {
                    type: "splitButton",
                    text: "Insert",
                    menuButtons: [
                        { text: "Insert above", icon: "insert-up" },
                        { text: "Insert between", icon: "insert-middle" },
                        { text: "Insert below", icon: "insert-down" }
                    ]
                },
                { type: "separator" },
                { template: "<label for='dropdown'>Format:</label>" },
                {
                    template: "<input id='dropdown' style='width: 150px;' />",
                    overflow: "never"
                },
                { type: "separator" },
                {
                    type: "buttonGroup",
                    buttons: [
                        { icon: "align-left", text: "Left", togglable: true, group: "text-align" },
                        { icon: "align-center", text: "Center", togglable: true, group: "text-align" },
                        { icon: "align-right", text: "Right", togglable: true, group: "text-align" }
                    ]
                },
                {
                    type: "buttonGroup",
                    buttons: [
                        { icon: "bold", text: "Bold", togglable: true },
                        { icon: "italic", text: "Italic", togglable: true },
                        { icon: "underline", text: "Underline", togglable: true }
                    ]
                },
                {
                    type: "button",
                    text: "Action",
                    overflow: "always"
                },
                {
                    type: "button",
                    text: "Another Action",
                    overflow: "always"
                },
                {
                    type: "button",
                    text: "Something else here",
                    overflow: "always"
                }
            ]
        });

        $("#dropdown").kendoDropDownList({
            optionLabel: "Paragraph",
            dataTextField: "text",
            dataValueField: "value",
            dataSource: [
                { text: "Heading 1", value: 1 },
                { text: "Heading 2", value: 2 },
                { text: "Heading 3", value: 3 },
                { text: "Title", value: 4 },
                { text: "Subtitle", value: 5 }
            ]
        });
    });

    $(document).ready(function() {
        $("#treeview").kendoTreeView();
    });

    
});