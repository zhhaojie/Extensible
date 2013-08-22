Ext.data.JsonP.Extensible_calendar_data_CalendarModel({"tagname":"class","name":"Extensible.calendar.data.CalendarModel","extends":"Extensible.data.Model","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":["Extensible.calendar.data.CalendarMappings"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Extensible.calendar.data.CalendarModel","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"mappingClass","tagname":"property","owner":"Extensible.calendar.data.CalendarModel","meta":{"private":true},"id":"property-mappingClass"},{"name":"mappingIdProperty","tagname":"property","owner":"Extensible.calendar.data.CalendarModel","meta":{"private":true},"id":"property-mappingIdProperty"}],"method":[{"name":"constructor","tagname":"method","owner":"Extensible.calendar.data.CalendarModel","meta":{},"id":"method-constructor"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"CalendarModel.js","href":"CalendarModel.html#Extensible-calendar-data-CalendarModel"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Extensible.data.Model"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Extensible.data.Model<div class='subclass '><strong>Extensible.calendar.data.CalendarModel</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Extensible.calendar.data.CalendarMappings' rel='Extensible.calendar.data.CalendarMappings' class='docClass'>Extensible.calendar.data.CalendarMappings</a></div><h4>Files</h4><div class='dependency'><a href='source/CalendarModel.html#Extensible-calendar-data-CalendarModel' target='_blank'>CalendarModel.js</a></div></pre><div class='doc-contents'><p>This is the Model specification for calendar items used by the\n<a href=\"#!/api/Extensible.calendar.CalendarPanel\" rel=\"Extensible.calendar.CalendarPanel\" class=\"docClass\">CalendarPanel</a>'s calendar store. If your model fields\nare named differently you should update the <strong>mapping</strong> configs accordingly.</p>\n\n<p>The only required fields when creating a new calendar record instance are CalendarId and\nTitle.  All other fields are either optional or will be defaulted if blank.</p>\n\n<p>Here is a basic example for how to create a new record of this type:</p>\n\n<pre><code>rec = new <a href=\"#!/api/Extensible.calendar.data.CalendarModel\" rel=\"Extensible.calendar.data.CalendarModel\" class=\"docClass\">Extensible.calendar.data.CalendarModel</a>({\n    CalendarId: 5,\n    Title: 'My Holidays',\n    Description: 'My personal holiday schedule',\n    ColorId: 3\n    });\n</code></pre>\n\n<p>If you have overridden any of the record's data mappings via the <a href=\"#!/api/Extensible.calendar.data.CalendarMappings\" rel=\"Extensible.calendar.data.CalendarMappings\" class=\"docClass\">CalendarMappings</a> object,\nyou may need to set the values using this alternate syntax to ensure that the fields match up correctly:</p>\n\n<pre><code>var M = <a href=\"#!/api/Extensible.calendar.data.CalendarMappings\" rel=\"Extensible.calendar.data.CalendarMappings\" class=\"docClass\">Extensible.calendar.data.CalendarMappings</a>;\n    rec = new <a href=\"#!/api/Extensible.calendar.data.CalendarModel\" rel=\"Extensible.calendar.data.CalendarModel\" class=\"docClass\">Extensible.calendar.data.CalendarModel</a>();\n    rec.data[M.CalendarId.name] = 5;\n    rec.data[M.Title.name] = 'My Holidays';\n    rec.data[M.Description.name] = 'My personal holiday schedule';\n    rec.data[M.ColorId.name] = 3;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-mappingClass' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.data.CalendarModel'>Extensible.calendar.data.CalendarModel</span><br/><a href='source/CalendarModel.html#Extensible-calendar-data-CalendarModel-property-mappingClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.data.CalendarModel-property-mappingClass' class='name expandable'>mappingClass</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Extensible.calendar.data.CalendarMappings'</code></p></div></div></div><div id='property-mappingIdProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.data.CalendarModel'>Extensible.calendar.data.CalendarModel</span><br/><a href='source/CalendarModel.html#Extensible-calendar-data-CalendarModel-property-mappingIdProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.data.CalendarModel-property-mappingIdProperty' class='name expandable'>mappingIdProperty</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'CalendarId'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.data.CalendarModel'>Extensible.calendar.data.CalendarModel</span><br/><a href='source/CalendarModel.html#Extensible-calendar-data-CalendarModel-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Extensible.calendar.data.CalendarModel-method-constructor' class='name expandable'>Extensible.calendar.data.CalendarModel</a>( <span class='pre'>[data], [id]</span> ) : <a href=\"#!/api/Extensible.calendar.data.CalendarModel\" rel=\"Extensible.calendar.data.CalendarModel\" class=\"docClass\">Extensible.calendar.data.CalendarModel</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>An object, the properties of which provide values for the new Record's\nfields. If not specified the defaultValue\nfor each field will be assigned.</p>\n</div></li><li><span class='pre'>id</span> : Object (optional)<div class='sub-desc'><p>The id of the Record. The id is used by the\nExt.data.Store object which owns the Record to index its collection\nof Records (therefore this id should be unique within each store). If an\nid is not specified a phantom\nRecord will be created with an automatically generated id.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Extensible.calendar.data.CalendarModel\" rel=\"Extensible.calendar.data.CalendarModel\" class=\"docClass\">Extensible.calendar.data.CalendarModel</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});